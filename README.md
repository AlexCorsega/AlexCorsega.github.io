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

## SEO

This site is built to rank. It ships with:

- Unique `<title>` + meta description per page, and a canonical URL on each
- Full **Open Graph** + **Twitter Card** tags with a 1200×630 share image (`og-image.png`)
- **JSON-LD structured data** — `Person` + `WebSite` on the home page, `BreadcrumbList` on Projects, `ContactPage` on Contact
- `robots.txt` and `sitemap.xml` (update the `<lastmod>` dates when you change content)
- Semantic HTML, descriptive `alt`/`aria-label`s, and fast, dependency-free loading

### After you deploy — do these once to get indexed

1. **Google Search Console** → [search.google.com/search-console](https://search.google.com/search-console): add `https://alexcorsega.github.io/`, verify (the HTML-tag method is easiest), then **Sitemaps → submit** `sitemap.xml`. Use **URL Inspection → Request indexing** on the home page to speed things up.
2. **Bing Webmaster Tools** → [bing.com/webmasters](https://www.bing.com/webmasters): same idea (you can import directly from Google).
3. **Test the rich results** with the [Rich Results Test](https://search.google.com/test/rich-results) and validate the social card with the [Meta Sharing Debugger](https://developers.facebook.com/tools/debug/) / [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
4. **Build backlinks** — put the URL in your GitHub profile/bio, LinkedIn, and résumé. Inbound links are the single biggest ranking factor for a new personal site.

> If you regenerate the share image, keep it named `og-image.png` at 1200×630 (or update the URLs in each page's `<head>`).

## Customize

- **Content** lives directly in the `.html` files.
- **Colors / theme** are CSS variables at the top of `styles.css` (`:root` and `[data-theme="light"]`).
- **Contact form** posts to `corsegaalex@gmail.com` — update the `action` in `contact.html` to change the recipient. The first submission triggers a one-time email confirmation from FormSubmit.

## Tech

`HTML5` · `CSS3` (custom properties, grid, flexbox) · `Vanilla JS` (IntersectionObserver)

---

© Alex D. Corsega Jr.
