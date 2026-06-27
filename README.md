# Alex D. Corsega Jr. — Portfolio

A modern, responsive personal portfolio built with vanilla **HTML, CSS, and JavaScript** — no build step, no dependencies. Designed to be hosted for free on **GitHub Pages**.

🔗 **Live site:** **[alexcorsega.github.io](https://alexcorsega.github.io/)**

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

## Hosting

This site is hosted on **GitHub Pages** from the [`AlexCorsega.github.io`](https://github.com/AlexCorsega/AlexCorsega.github.io) repository, which publishes automatically at the root domain: **https://alexcorsega.github.io/**

### Updating the live site

Any push to the `main` branch redeploys automatically within a minute:

```bash
git add -A
git commit -m "describe your change"
git push
```

> The repo is named `AlexCorsega.github.io` (username + `.github.io`) — that exact name is what makes GitHub serve it at the root URL with no sub-path.

## SEO

This site is built to rank. It ships with:

- Unique `<title>` + meta description per page, and a canonical URL on each
- Full **Open Graph** + **Twitter Card** tags with a 1200×630 share image (`assets/og-image.png`)
- **JSON-LD structured data** — `Person` + `WebSite` on the home page, `BreadcrumbList` on Projects, `ContactPage` on Contact
- `robots.txt` and `sitemap.xml` (update the `<lastmod>` dates when you change content)
- Semantic HTML, descriptive `alt`/`aria-label`s, and fast, dependency-free loading

### After you deploy — do these once to get indexed

1. **Google Search Console** → [search.google.com/search-console](https://search.google.com/search-console): add `https://alexcorsega.github.io/`, verify (the HTML-tag method is easiest), then **Sitemaps → submit** `sitemap.xml`. Use **URL Inspection → Request indexing** on the home page to speed things up.
2. **Bing Webmaster Tools** → [bing.com/webmasters](https://www.bing.com/webmasters): same idea (you can import directly from Google).
3. **Test the rich results** with the [Rich Results Test](https://search.google.com/test/rich-results) and validate the social card with the [Meta Sharing Debugger](https://developers.facebook.com/tools/debug/) / [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
4. **Build backlinks** — put the URL in your GitHub profile/bio, LinkedIn, and résumé. Inbound links are the single biggest ranking factor for a new personal site.

> If you regenerate the share image, keep it at `assets/og-image.png`, 1200×630 (or update the URLs in each page's `<head>`).

## Customize

- **Content** lives directly in the `.html` files.
- **Colors / theme** are CSS variables at the top of `assets/styles.css` (`:root` and `[data-theme="light"]`).
- **Contact form** posts to `corsegaalex@gmail.com` — update the `action` in `contact.html` to change the recipient. The first submission triggers a one-time email confirmation from FormSubmit.

## Tech

`HTML5` · `CSS3` (custom properties, grid, flexbox) · `Vanilla JS` (IntersectionObserver)

---

© Alex D. Corsega Jr.
