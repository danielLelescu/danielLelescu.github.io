/* ==========================================================================
   Portfolio Template — script.js
   Only two small, progressive enhancements:
     1. Dark mode toggle (persisted in localStorage, respects system preference)
     2. Mobile menu accessibility (aria-expanded + close on link click)

   The site works fully without this file:
     - Dark mode falls back to the OS preference (prefers-color-scheme).
     - Project filtering is pure CSS (radio + :checked).
     - The mobile menu opens/closes via the CSS :has() checkbox hack.
   ========================================================================== */
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('[data-theme-toggle]');

  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function syncToggle() {
    if (!toggle) return;
    var isDark = currentTheme() === 'dark';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Toggle dark mode');
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) { /* storage blocked */ }
    syncToggle();
  }

  if (toggle) {
    syncToggle();
    toggle.addEventListener('click', function () {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  }

  /* ---- Mobile menu: close after choosing a link, keep aria in sync ---- */
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    var setExpanded = function (open) {
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    setExpanded(navToggle.checked);
    navToggle.addEventListener('change', function () { setExpanded(navToggle.checked); });
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { navToggle.checked = false; setExpanded(false); }
    });
  }

  /* ---- Footer year ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
