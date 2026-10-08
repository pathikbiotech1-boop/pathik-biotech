# Pathik Biotech Pvt. Ltd. — Website

Pure HTML5 / CSS3 / vanilla JavaScript. No npm, no frameworks.

## Run
- Double-click `index.html`, or
- `python -m http.server 8000` then open http://localhost:8000

(The Google Fonts link needs internet; offline, system fallback fonts are used.)

## Structure
index / about / products / product / contact `.html`, `css/` (style, responsive, animations), `js/` (products = data, main = shared UI, carousel, product-details = listing + detail pages, contact).
Header and footer are injected by `js/main.js` so they are edited in one place.

## IMPORTANT — replace placeholder assets
Generated placeholders are included so the site runs; swap them with real files **using the same file names**:
- `assets/products/*.png` — real Pathik pack shots (15). Current files are simple labelled placeholders.
- `assets/images/hero.jpg`, `about.jpg`, `impact.jpg` — real agricultural photographs (hero ~1920×900, about ~1000×800, impact ~1400×1000, under ~300 KB each).
- `assets/logo/pathik-logo.png` — the supplied logo, only cropped of surrounding white space.

## Catalogue content to fill in
Descriptions and target pests/crops were not supplied, so every product shows "Refer to the product label for approved usage." Edit `js/products.js`. DAHAN's dose and the bio products' dose/packing were not supplied and are shown as label-reference.

## Contact form
No backend is connected. Set `FORM_ENDPOINT` in `js/contact.js` (e.g. Formspree). Until then it validates and opens the visitor's email app with the details pre-filled.

## Before going live
Replace the canonical URL placeholder in each page's `<head>`. Footer year is 2024 as specified.
