/* ==========================================================
   product-details.js — products.html listing/filter and
   product.html detail rendering (reads URL parameters)
   ========================================================== */
const escapeText = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- products.html ---------- */
function initProductsPage() {
  const grid = document.querySelector("#product-grid");
  const filterBar = document.querySelector("#filter-bar");
  if (!grid || !filterBar) return;
  const status = document.querySelector("#filter-status");

  filterBar.innerHTML = [{ slug: "all", name: "All" }, ...categories].map((c) =>
    `<button type="button" class="filter-btn" data-filter="${c.slug}" aria-pressed="false">${c.name.toUpperCase()}</button>`).join("");

  const valid = (slug) => slug === "all" || categories.some((c) => c.slug === slug);
  const fromUrl = () => {
    const q = (new URLSearchParams(location.search).get("category") || "all").toLowerCase();
    return valid(q) ? q : "all";
  };

  function apply(slug, pushState) {
    filterBar.querySelectorAll(".filter-btn").forEach((b) => {
      const on = b.dataset.filter === slug;
      b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", String(on));
    });
    const list = slug === "all" ? products : products.filter((p) => slugOf(p.category) === slug);
    grid.classList.add("is-filtering");
    setTimeout(() => {
      grid.innerHTML = list.map((p) => productCardHTML(p)).join("");
      grid.classList.remove("is-filtering");
    }, 140);
    if (status) status.textContent = `Showing ${list.length} product${list.length === 1 ? "" : "s"}${slug === "all" ? "" : " in " + categories.find((c) => c.slug === slug).name}`;
    if (pushState) {
      const url = slug === "all" ? "products.html" : `products.html?category=${slug}`;
      try { history.pushState({ slug }, "", url); } catch (e) { /* file:// restrictions */ }
    }
  }
  filterBar.addEventListener("click", (e) => {
    const b = e.target.closest(".filter-btn"); if (b) apply(b.dataset.filter, true);
  });
  window.addEventListener("popstate", () => apply(fromUrl(), false));
  apply(fromUrl(), false);
}

/* ---------- product.html ---------- */
function initProductPage() {
  const host = document.querySelector("#product-detail");
  if (!host) return;
  const id = new URLSearchParams(location.search).get("id");
  const p = products.find((x) => x.id === id);

  if (!p) {
    document.title = "Product not found | Pathik Biotech Pvt. Ltd.";
    host.innerHTML = `<div class="container not-found"><h1>Product not found</h1>
      <p>We could not find that product. Browse the full range instead.</p>
      <a class="btn btn-primary" href="products.html">Back to Products</a></div>`;
    return;
  }
  document.title = `${p.name} | Pathik Biotech Pvt. Ltd.`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = `${p.name} — ${p.formulation}. ${p.category} from Pathik Biotech Pvt. Ltd.`;

  const slug = slugOf(p.category);
  const related = products.filter((x) => x.category === p.category && x.id !== p.id);
  const others = related.length ? related : products.filter((x) => x.id !== p.id).slice(0, 3);
  const row = (label, value) => `<div class="spec-row"><dt>${label}</dt><dd>${value}</dd></div>`;
  const packing = p.packing.length ? `<ul class="chips">${p.packing.map((x) => `<li>${escapeText(x)}</li>`).join("")}</ul>` : LABEL_NOTE;
  const waMsg = encodeURIComponent(`Hello Pathik Biotech, I would like to enquire about ${p.name}.`);

  host.innerHTML = `
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb"><ol>
      <li><a href="index.html">Home</a></li><li><a href="products.html">Products</a></li>
      <li><a href="products.html?category=${slug}">${p.category}</a></li><li aria-current="page">${escapeText(p.name)}</li></ol></nav>
    <article class="detail-grid page-enter">
      <div class="detail-media"><img src="${p.image}" alt="${escapeText(p.name)} pack" width="600" height="800"></div>
      <div class="detail-info">
        <p class="eyebrow">${p.category}</p>
        <h1>${escapeText(p.name)}</h1>
        <p class="detail-formulation">${escapeText(p.formulation)}</p>
        <p class="detail-desc">${escapeText(p.description)}</p>
        <dl class="specs">
          ${row("Target / Purpose", escapeText(p.target))}
          ${row("Dose", escapeText(p.dose))}
          ${row("Packing", packing)}
        </dl>
        <div class="safety" role="note"><strong>Safety information</strong><p>${SAFETY_NOTE}</p></div>
        <div class="detail-actions">
          <a class="btn btn-primary" href="contact.html?product=${p.id}">Contact Us About ${escapeText(p.name)}</a>
          <a class="btn btn-outline" href="https://wa.me/919161656601?text=${waMsg}" target="_blank" rel="noopener">WhatsApp</a>
          <a class="btn btn-ghost" href="products.html${p.category ? "?category=" + slug : ""}">← Back to Products</a>
        </div>
      </div>
    </article>
    <section class="related" aria-labelledby="related-title">
      <h2 id="related-title">Related Products</h2>
      <div class="product-grid">${others.map((x) => productCardHTML(x)).join("")}</div>
    </section>
  </div>`;
}

document.addEventListener("DOMContentLoaded", () => { initProductsPage(); initProductPage(); });
