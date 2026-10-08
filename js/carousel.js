/* ==========================================================
   carousel.js — Featured products carousel (vanilla JS)
   Scroll-snap track + arrows + touch swipe (native) +
   mouse drag + keyboard (←/→/Home/End).
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#featured-carousel");
  if (!root || typeof products === "undefined") return;
  const track = root.querySelector(".carousel-track");
  const prev = root.querySelector(".carousel-prev");
  const next = root.querySelector(".carousel-next");

  track.innerHTML = FEATURED_IDS.map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
    .map((p) => `<div class="carousel-slide" role="group" aria-roledescription="slide">${productCardHTML(p)}</div>`).join("");

  const step = () => {
    const slide = track.querySelector(".carousel-slide");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return slide ? slide.getBoundingClientRect().width + gap : track.clientWidth;
  };
  const go = (dir) => track.scrollBy({ left: dir * step(), behavior: "smooth" });
  const updateButtons = () => {
    const max = track.scrollWidth - track.clientWidth - 2;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max;
    root.classList.toggle("no-overflow", max <= 0);
  };
  prev.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));
  track.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();

  // Keyboard
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
    else if (e.key === "Home") { e.preventDefault(); track.scrollTo({ left: 0, behavior: "smooth" }); }
    else if (e.key === "End") { e.preventDefault(); track.scrollTo({ left: track.scrollWidth, behavior: "smooth" }); }
  });

  // Mouse drag (touch uses native swipe)
  let down = false, startX = 0, startLeft = 0, moved = false;
  track.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft;
  });
  window.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 5) { moved = true; track.classList.add("is-dragging"); }
    track.scrollLeft = startLeft - dx;
  });
  window.addEventListener("pointerup", () => {
    if (!down) return;
    down = false; track.classList.remove("is-dragging");
    if (moved) { const s = step(); track.scrollTo({ left: Math.round(track.scrollLeft / s) * s, behavior: "smooth" }); }
  });
  track.addEventListener("click", (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
});
