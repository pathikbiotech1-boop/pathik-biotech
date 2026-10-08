/* ==========================================================
   PRODUCT DATA — Pathik Biotech Pvt. Ltd.
   Data only. UI logic lives in main.js / product-details.js.
   Where the catalogue text was not supplied, the fallback
   "Refer to the product label for approved usage." is used.
   Edit descriptions / targets here once the catalogue text
   is available.
   ========================================================== */
const LABEL_NOTE = "Refer to the product label for approved usage.";

const categories = [
  { slug: "insecticides", name: "Insecticides" },
  { slug: "fungicides",   name: "Fungicides" },
  { slug: "herbicides",   name: "Herbicides" },
  { slug: "bio",          name: "Bio" },
  { slug: "pgr",          name: "PGR" }
];

const products = [
  { id: "ira", name: "IRA", category: "Insecticides", formulation: "EMAMECTIN BENZOATE 5% SG",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: "100–150 gm per acre",
    packing: ["10 gm", "50 gm", "100 gm", "250 gm", "500 gm"], image: "assets/products/ira.png" },
  { id: "p-alpha", name: "P-ALPHA", category: "Insecticides", formulation: "ALPHACYPERMETHRIN 10% EC",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: "100–150 ml per acre",
    packing: ["100 ml", "250 ml", "500 ml", "1 L"], image: "assets/products/p-alpha.png" },
  { id: "kick-505", name: "KICK 505", category: "Insecticides", formulation: "CHLORPYRIPHOS 50% + CYPERMETHRIN 5% EC",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: "300–600 ml per acre",
    packing: ["100 ml", "250 ml", "500 ml", "1 L"], image: "assets/products/kick-505.png" },

  { id: "panchmukhi", name: "PANCHMUKHI", category: "Fungicides", formulation: "AZOXYSTROBIN 11% + TEBUCONAZOLE 18.3% SC",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: "250–350 ml per acre",
    packing: ["100 ml", "250 ml", "500 ml", "1 L"], image: "assets/products/panchmukhi.png" },
  { id: "peril", name: "PERIL", category: "Fungicides", formulation: "TEBUCONAZOLE 10% + SULPHAR 65% WG",
    description: LABEL_NOTE, target: "Powdery mildew and rust diseases, as described in the Pathik Biotech catalogue.", dose: "500 gm per acre",
    packing: ["250 gm", "500 gm"], image: "assets/products/peril.png" },

  { id: "duggu-71", name: "DUGGU 71", category: "Herbicides", formulation: "GLYPHOSATE 71% SG",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: "1000–1500 gm per acre",
    packing: ["100 gm", "500 gm", "1 Kg"], image: "assets/products/duggu-71.png" },
  { id: "kill-p", name: "KILL-P", category: "Herbicides", formulation: "GLYPHOSATE 41% SL",
    description: LABEL_NOTE, target: "Broad-spectrum weed control, as specified in the Pathik Biotech catalogue.", dose: "1200–2500 ml per acre",
    packing: ["250 ml", "500 ml", "1 L", "5 L"], image: "assets/products/kill-p.png" },
  { id: "dahan", name: "DAHAN", category: "Herbicides", formulation: "BISPYRIBAC SODIUM 10% W/V SC",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: LABEL_NOTE,
    packing: ["100 ml", "250 ml", "500 ml", "1 L"], image: "assets/products/dahan.png" },

  { id: "trikal", name: "TRIKAL", category: "Bio", formulation: "Bio Extract",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: LABEL_NOTE, packing: [], image: "assets/products/trikal.png" },
  { id: "jaago", name: "JAAGO", category: "Bio", formulation: "Bio Plant Promoter",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: LABEL_NOTE, packing: [], image: "assets/products/jaago.png" },
  { id: "humi-plus", name: "HUMI+", category: "Bio", formulation: "POTASSIUM HUMATE 98%",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: LABEL_NOTE, packing: [], image: "assets/products/humi-plus.png" },
  { id: "extra-power", name: "EXTRA POWER", category: "Bio", formulation: "Bio Growth Enhancer",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: LABEL_NOTE, packing: [], image: "assets/products/extra-power.png" },

  { id: "drone", name: "DRONE", category: "PGR", formulation: "SODIUM PARA-NITRO PHENOLATE 0.3% SL",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: "250–300 ml per acre",
    packing: ["100 ml", "250 ml", "500 ml", "1 L"], image: "assets/products/drone.png" },
  { id: "green-gold", name: "GREEN GOLD", category: "PGR", formulation: "Growth Regulator",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: "15–20 ml per 15 litre water",
    packing: ["100 ml", "250 ml", "500 ml"], image: "assets/products/green-gold.png" },
  { id: "p-20", name: "P-20", category: "PGR", formulation: "SILICON BASED EXCELLENT SPREADER",
    description: LABEL_NOTE, target: LABEL_NOTE, dose: "5–10 ml in 15 litre water",
    packing: ["5 ml pouch", "100 ml", "250 ml", "500 ml"], image: "assets/products/p-20.png" }
];

const FEATURED_IDS = ["ira", "panchmukhi", "duggu-71", "trikal", "drone"];
const SAFETY_NOTE = "Use agricultural products only according to the approved product label, crop recommendations and applicable local regulations. Always follow recommended dosage, safety precautions and application instructions.";
