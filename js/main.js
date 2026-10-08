/* ==========================================================
   main.js — shared UI: header, footer, menus, reveal, home
   ========================================================== */
const CONTACT = {
  phone: "+91 9161656601", phoneHref: "tel:+919161656601",
  email: "pathikbiotech1@gmail.com", emailHref: "mailto:pathikbiotech1@gmail.com",
  whatsapp: "https://wa.me/919161656601", address: "Nilmatha, Lucknow - 226002"
};

/* ---------- Icons (line style, inherit currentColor) ---------- */
const ICON = {
  bug: '<path d="M12 8a4 4 0 0 1 4 4v3a4 4 0 0 1-8 0v-3a4 4 0 0 1 4-4zM9 6l-2-2M15 6l2-2M8 12H4M16 12h4M8.5 16.5 5 19M15.5 16.5 19 19"/>',
  leaf: '<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19c3-5 6-8 10-10"/>',
  weed: '<path d="M12 21v-9M12 12c0-4-3-6-6-6 0 4 2 6 6 6zM12 14c0-3 2-5 6-5 0 3-2 5-6 5zM6 21h12"/>',
  sprout: '<path d="M12 21v-8"/><path d="M12 13c-4 0-6-2-6-6 4 0 6 2 6 6zM12 15c0-4 2-6 6-6 0 4-2 6-6 6z"/>',
  pgr: '<path d="M12 21V9"/><path d="M8 13l4-4 4 4M8 8l4-4 4 4"/><path d="M6 21h12"/>',
  award: '<circle cx="12" cy="9" r="5"/><path d="m9 13-1.5 8L12 18.500 16.500 21 15 13"/>',
  chart: '<path d="M4 20V4M4 20h16"/><path d="m7 15 4-4 3 3 5-6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.500"/><path d="M3 20c0-3.500 3-6 6-6s6 2.500 6 6M15 15c3-.5 6 1.500 6 5"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.500 8 8 9 4.500-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.500c.7.7 1 1.500 1 2.500h6c0-1 .3-1.800 1-2.500A6 6 0 0 0 12 3z"/>',
  phone: '<path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.500"/>',
  arrow: '<path d="m9 6 6 6-6 6"/>'
};
const svgIcon = (name, cls = "icon") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[name]}</svg>`;
const CATEGORY_ICON = { insecticides: "bug", fungicides: "leaf", herbicides: "weed", bio: "sprout", pgr: "pgr" };

const slugOf = (categoryName) => categoryName.toLowerCase();
const el = (selector, root = document) => root.querySelector(selector);
const all = (selector, root = document) => [...root.querySelectorAll(selector)];

/* ---------- Header & footer injection ---------- */
function renderHeader() {
  const host = el("#site-header");
  if (!host) return;
  const page = document.body.dataset.page || "";
  const cur = (name) => (page === name ? ' aria-current="page" class="is-active"' : "");
  const catLinks = (typeof categories !== "undefined" ? categories : [])
    .map((c) => `<li><a href="products.html?category=${c.slug}">${c.name}</a></li>`).join("");
  host.innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" id="top-header">
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="Pathik Biotech Pvt. Ltd. — Home">
        <img src="assets/logo/pathik-logo.png" alt="Pathik Biotech logo" width="379" height="269">
      </a>
      <nav class="primary-nav" aria-label="Primary">
        <ul class="nav-list">
          <li><a href="index.html"${cur("home")}>Home</a></li>
          <li><a href="about.html"${cur("about")}>About Us</a></li>
          <li class="has-dropdown">
            <a href="products.html"${cur("products")} aria-haspopup="true">Products <span class="caret" aria-hidden="true">▾</span></a>
            <ul class="dropdown">${catLinks}</ul>
          </li>
          <li><a href="contact.html"${cur("contact")}>Contact Us</a></li>
        </ul>
      </nav>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile" hidden>
      <ul>
        <li><a href="index.html"${cur("home")}>Home</a></li>
        <li><a href="about.html"${cur("about")}>About Us</a></li>
        <li>
          <button class="acc-toggle${page === "products" ? " is-active" : ""}" type="button" aria-expanded="false" aria-controls="mobile-products">Products <span class="caret" aria-hidden="true">▾</span></button>
          <ul class="acc-panel" id="mobile-products">${catLinks}</ul>
        </li>
        <li><a href="contact.html"${cur("contact")}>Contact Us</a></li>
      </ul>
    </nav>
  </header>`;
}

function renderFooter() {
  const host = el("#site-footer");
  if (!host) return;
  const prodLinks = categories.map((c) => `<li><a href="products.html?category=${c.slug}">${c.name}</a></li>`).join("");
  host.innerHTML = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a class="footer-logo" href="index.html" aria-label="Pathik Biotech home"><img src="assets/logo/pathik-logo.png" alt="Pathik Biotech logo" width="379" height="269" loading="lazy"></a>
        <p> Pathik Biotech Pvt. Ltd.</p>
      </div>
      <div><h2 class="footer-title">Quick Links</h2>
        <ul><li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li><li><a href="products.html">Products</a></li><li><a href="contact.html">Contact Us</a></li></ul></div>
      <div><h2 class="footer-title">Our Products</h2><ul>${prodLinks}</ul></div>
      <div><h2 class="footer-title">Contact Us</h2>
        <ul class="footer-contact">
          <li>${svgIcon("pin")}<span>${CONTACT.address}</span></li>
          <li>${svgIcon("mail")}<a href="${CONTACT.emailHref}">${CONTACT.email}</a></li>
          <li>${svgIcon("phone")}<a href="${CONTACT.phoneHref}">${CONTACT.phone}</a></li>
          <li>${svgIcon("chat")}<a href="${CONTACT.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
        </ul></div>
    </div>
    <div class="footer-bottom"><div class="container">
      <p>© 2026 Pathik Biotech Pvt. Ltd. All Rights Reserved.</p>
      
    </div></div>
  </footer>
  <button class="to-top" type="button" aria-label="Back to top" hidden>↑</button>`;
}

/* ---------- Menus ---------- */
function initMenus() {
  const header = el("#top-header");
  if (!header) return;
  const toggle = el(".menu-toggle", header);
  const mobile = el("#mobile-nav", header);

  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    header.classList.toggle("menu-open", open);
    document.body.classList.toggle("no-scroll", open);
    if (open) { mobile.hidden = false; requestAnimationFrame(() => mobile.classList.add("is-open")); }
    else { mobile.classList.remove("is-open"); setTimeout(() => { if (!header.classList.contains("menu-open")) mobile.hidden = true; }, 280); }
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  all("a", mobile).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("click", (e) => {
    if (toggle.getAttribute("aria-expanded") === "true" && !header.contains(e.target)) setMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (toggle.getAttribute("aria-expanded") === "true") { setMenu(false); toggle.focus(); }
      all(".has-dropdown.is-open").forEach((li) => li.classList.remove("is-open"));
    }
  });
  window.matchMedia("(min-width: 992px)").addEventListener("change", (m) => { if (m.matches) setMenu(false); });

  // Accordion
  const acc = el(".acc-toggle", mobile);
  acc.addEventListener("click", () => {
    const open = acc.getAttribute("aria-expanded") !== "true";
    acc.setAttribute("aria-expanded", String(open));
    el("#mobile-products").classList.toggle("is-open", open);
  });

  // Desktop dropdown keyboard support
  const dd = el(".has-dropdown", header);
  dd.addEventListener("focusin", () => dd.classList.add("is-open"));
  dd.addEventListener("focusout", (e) => { if (!dd.contains(e.relatedTarget)) dd.classList.remove("is-open"); });

  // Sticky shadow
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
}

function initBackToTop() {
  const btn = el(".to-top");
  if (!btn) return;
  const update = () => { btn.hidden = window.scrollY < 600; };
  window.addEventListener("scroll", update, { passive: true }); update();
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initReveal() {
  const items = all(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((i) => i.classList.add("is-visible")); return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  items.forEach((i) => io.observe(i));
}

/* ---------- Shared product card ---------- */
function productCardHTML(p, { compact = false } = {}) {
  return `
  <article class="product-card">
    <a class="product-card-img" href="product.html?id=${p.id}" tabindex="-1" aria-hidden="true">
      <img src="${p.image}" alt="${p.name} ${p.category.toLowerCase()} pack" loading="lazy" width="300" height="400" draggable="false">
    </a>
    <div class="product-card-body">
      <h3>${p.name}</h3>
      <p class="formulation">${p.formulation}</p>
      <a class="btn btn-outline btn-sm" href="product.html?id=${p.id}">View Details <span aria-hidden="true">→</span></a>
    </div>
  </article>`;
}

/* ---------- Home page ---------- */
function renderHome() {
  const grid = el("#category-grid");
  if (grid) {
    grid.innerHTML = categories.map((c) => {
      const items = products.filter((p) => slugOf(p.category) === c.slug).slice(0, 3);
      return `
      <article class="category-card reveal">
        <div class="category-head">${svgIcon(CATEGORY_ICON[c.slug], "icon icon-lg")}<h3>${c.name.toUpperCase()}</h3></div>
        <div class="category-thumbs">${items.map((p) => `<img src="${p.image}" alt="${p.name}" loading="lazy" width="120" height="160">`).join("")}</div>
        <a class="btn btn-outline btn-sm" href="products.html?category=${c.slug}">View Products <span aria-hidden="true">→</span></a>
      </article>`;
    }).join("");
  }
  ["#benefits-icons", "#about-icons"].forEach((s) => all(`${s} [data-icon]`).forEach((n) => (n.innerHTML = svgIcon(n.dataset.icon, "icon icon-lg"))));
  all("[data-icon]").forEach((n) => { if (!n.innerHTML.trim()) n.innerHTML = svgIcon(n.dataset.icon, "icon icon-lg"); });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader(); renderFooter(); initMenus(); initBackToTop(); renderHome(); initReveal();
});
