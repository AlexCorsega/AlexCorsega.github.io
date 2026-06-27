# Alex D. Corsega Jr. — Portfolio

A modern, responsive personal portfolio built with vanilla **HTML, CSS, and JavaScript** — no build step, no dependencies. Designed to be hosted for free on **GitHub Pages**.

🔗 **Live site:** `https://AlexCorsega.github.io/<repo-name>/`

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, about, skills, and experience |
| Projects | `projects.html` | Selected projects across web, mobile & desktop |
| Contact | `contact.html` | Contact form + direct channels |

## Features

- 🎨 Modern dark/light theme with a persisted toggle
- ✨ Smooth scroll-reveal animations and animated stat counters
- 📱 Fully responsive with a mobile menu
- ⚡ Zero dependencies — loads instantly
- ♿ Respects `prefers-reduced-motion`
- 📨 Working contact form via [FormSubmit](https://formsubmit.co) (no backend needed)

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Push this folder to it:
   ```bash
   git remote add origin https://github.com/AlexCorsega/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from a branch**, pick `main` / `root`, and save.
4. Your site goes live at `https://AlexCorsega.github.io/portfolio/` within a minute.

> Tip: To host at `https://AlexCorsega.github.io` directly (no sub-path), name the repo `AlexCorsega.github.io`.

## Customize

- **Content** lives directly in the `.html` files.
- **Colors / theme** are CSS variables at the top of `styles.css` (`:root` and `[data-theme="light"]`).
- **Contact form** posts to `corsegaalex@gmail.com` — update the `action` in `contact.html` to change the recipient. The first submission triggers a one-time email confirmation from FormSubmit.

## Tech

`HTML5` · `CSS3` (custom properties, grid, flexbox) · `Vanilla JS` (IntersectionObserver)

---

© Alex D. Corsega Jr.
