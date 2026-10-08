/* ==========================================================
   contact.js — client-side validation only.
   NOTE: No backend is connected. To send enquiries, set
   FORM_ENDPOINT below (e.g. Formspree / your own API).
   Until then, the form opens the visitor's email app with
   the details pre-filled (mailto), and says so honestly.
   ========================================================== */
const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#enquiry-form");
  if (!form) return;
  const status = document.querySelector("#form-status");
  const pre = new URLSearchParams(location.search).get("product");
  if (pre && typeof products !== "undefined") {
    const p = products.find((x) => x.id === pre);
    if (p) form.message.value = `I would like to know more about ${p.name}.`;
  }

  const rules = {
    name:  (v) => v.trim().length >= 2 || "Please enter your name.",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Please enter a valid email address.",
    phone: (v) => /^[+]?[\d\s-]{8,15}$/.test(v.trim()) || "Please enter a valid phone number.",
    message: (v) => v.trim().length >= 10 || "Please write at least 10 characters."
  };
  const check = (field) => {
    const res = rules[field.name](field.value);
    const err = document.querySelector(`#err-${field.name}`);
    field.setAttribute("aria-invalid", res === true ? "false" : "true");
    err.textContent = res === true ? "" : res;
    return res === true;
  };
  Object.keys(rules).forEach((n) => {
    form[n].addEventListener("blur", () => check(form[n]));
    form[n].addEventListener("input", () => { if (form[n].getAttribute("aria-invalid") === "true") check(form[n]); });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const ok = Object.keys(rules).map((n) => check(form[n])).every(Boolean);
    if (!ok) { status.className = "form-status error"; status.textContent = "Please fix the highlighted fields."; form.querySelector('[aria-invalid="true"]').focus(); return; }
    const data = Object.fromEntries(new FormData(form).entries());
    if (FORM_ENDPOINT) {
      try {
        const r = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
        if (!r.ok) throw new Error("bad response");
        status.className = "form-status ok"; status.textContent = "Thank you. Your enquiry has been sent."; form.reset();
      } catch (err) { status.className = "form-status error"; status.textContent = "Could not send your enquiry. Please call or WhatsApp us instead."; }
      return;
    }
    const body = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\n${data.message}`;
    status.className = "form-status ok";
    status.textContent = "Your details look good. Your email app will open to send this enquiry. (No server is connected to this form yet.)";
    window.location.href = `mailto:pathikbiotech1@gmail.com?subject=${encodeURIComponent("Website enquiry from " + data.name)}&body=${encodeURIComponent(body)}`;
  });
});
