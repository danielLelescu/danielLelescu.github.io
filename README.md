# Responsive Portfolio Template (HTML + CSS)

A clean, accessible, fully responsive portfolio template for **GitHub Pages**.
No build step, no dependencies, no frameworks — just three files.

## Features

- **Sticky navbar** with blur backdrop and mobile hamburger menu (works without JS via the CSS `:has()` checkbox hack)
- **Dark mode** toggle with `localStorage` persistence and automatic `prefers-color-scheme` detection
- **Project filter grid** — pure CSS filtering (radio inputs + `:checked`), no JavaScript required
- **Live demo + code links** on every project card
- Fully responsive: fluid type via `clamp()`, mobile-first grid, mobile nav
- Accessible: semantic HTML, skip link, focus-visible styles, ARIA labels, `prefers-reduced-motion` support
- Zero external image assets (gradient placeholders) — works offline and on GitHub Pages

## How it works

The template is **HTML + CSS at its core** — project filtering and the mobile menu are pure CSS (using the modern `:has()` selector), so they work even with JavaScript disabled. A tiny optional `script.js` adds two progressive enhancements: persistent dark-mode (saved to `localStorage`) and a couple of accessibility niceties on the mobile menu. If JS is off, the page respects the OS color-scheme preference and the toggle button is hidden. `:has()` is supported in all modern browsers (Chrome/Edge 105+, Firefox 121+, Safari 15.4+).

## Files

```
portfolio/
├── index.html      # Markup & content
├── styles.css      # All styling + design tokens (rebrand here)
├── script.js        # Optional: dark-mode persistence & mobile-menu a11y
└── README.md        # This file
```

> The site works **without** `script.js`. Filtering and the mobile menu are CSS-only.
> The script only adds dark-mode persistence and a couple of accessibility niceties.

## Customize

1. Open `index.html` and replace:
   - `Your Name` (title, brand, hero, footer)
   - Hero subtitle, About text, Skills list, Contact links (`mailto:`, GitHub, LinkedIn)
   - Project cards: title, description, tags, and the two links per card:
     - `Live demo ↗` → `href="https://example.com/demo/..."` (your deployed project)
     - `Code ↗` → `href="https://github.com/yourusername/repo"`
   - Card category via `data-cat="web|mobile|design|oss"` (add your own categories in the filter bar + matching CSS rules at the bottom of `styles.css`)
2. Open `styles.css` and edit the tokens under `:root` and `[data-theme="light"|"dark"]` to change colors, fonts, spacing.
3. Replace the favicon (data URI in `index.html`) with your own if desired.

## Run locally

Any static server works. Pick one:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then visit http://localhost:8000.

## Deploy to GitHub Pages (`username.github.io`)

This publishes your site at **`https://<your-username>.github.io/`**.

### 1. Create the repository

The repository name **must** be exactly `<your-username>.github.io` (replace `<your-username>`
with your GitHub username, e.g. `octocat.github.io`). GitHub uses this name to map the repo
to your root URL.

- Go to https://github.com/new
- Repository name: `yourusername.github.io`
- Set to **Public** (recommended). Private repositories have limited GitHub Pages availability depending on your GitHub plan.
- Leave "Add a README" unchecked (you already have these files)
- Click **Create repository**

### 2. Upload the files

**Option A — Git (recommended):**

```bash
# Inside the portfolio folder
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

**Option B — Drag & drop:**

Use the GitHub web UI: click **Add file → Upload files** in your new repo and drag
`index.html`, `styles.css`, and `script.js` into it, then commit.

### 3. Enable GitHub Pages

1. In the repo, go to **Settings → Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. **Branch:** select `main` and the `/ (root)` folder.
4. Click **Save**.

### 4. Visit your site

Wait ~1–2 minutes for the first build, then open:

```
https://yourusername.github.io/
```

You'll find build logs under the **Actions** tab if anything fails.

## Notes

- The repo must be named **exactly** `yourusername.github.io` for the root-domain URL.
  (For project sites at `username.github.io/repo-name/`, any repo name works — but you'd
  need to set the `<base href>` or use relative paths, which this template already does.)
- Changes pushed to `main` redeploy automatically.
- `script.js` uses `localStorage`, which is blocked inside some sandboxed preview iframes
  but works normally on the real GitHub Pages URL.
