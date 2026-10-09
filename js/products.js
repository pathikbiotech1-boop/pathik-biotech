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
    description: "This product is intended to control various crop pests that damage leaves, stems, shoots, and fruits.", target: "Bollworm, all types of leaf-eating caterpillars, fruit and shoot borer, fruit borer, mites, leaf folder, and stem fly.", dose: "100–150 gm per acre",
    packing: ["10 gm", "50 gm", "100 gm", "250 gm", "500 gm"], image: "assets/products/ira.png" },
  
  { id: "p-alpha", name: "P-ALPHA", category: "Insecticides", formulation: "ALPHACYPERMETHRIN 10% EC",
    description: "The product is intended to control different types of caterpillars by contact action and may also help prevent pest eggs from hatching.", target: "Due to its broad-spectrum action, this product controls various types of caterpillar pests. It kills these pests through contact, and it also helps prevent eggs from hatching.", dose: "100–150 ml per acre",
    packing: ["100 ml", "250 ml", "500 ml", "1 L"], image: "assets/products/p-alpha.png" },

  { id: "kick-505", name: "KICK 505", category: "Insecticides", formulation: "CHLORPYRIPHOS 50% + CYPERMETHRIN 5% EC",
    description: "This product is intended to control sucking pests, such as aphids, jassids, thrips, and whiteflies, as well as caterpillar pests that damage crop leaves, stems, and bolls.", target: "Aphids, jassids, thrips, whiteflies, tobacco caterpillars, spotted bollworm, American bollworm, and other caterpillar pests that damage crops.", dose: "300–600 ml per acre",
    packing: ["100 ml", "250 ml", "500 ml", "1 L"], image: "assets/products/kick-505.png" },

  { id: "panchmukhi", name: "PANCHMUKHI", category: "Fungicides", formulation: "AZOXYSTROBIN 11% + TEBUCONAZOLE 18.3% SC",
    description: "The product appears to be intended to control several pests and crop problems affecting fruits, leaves, and stems.", target: "The target pests include fruit rot, whiteflies, dieback, fruit borers, stem borers, leaf miners, aphids, thrips, jassids, and other pests that damage fruits and crops.", dose: "250–350 ml per acre",
    packing: ["100 ml", "250 ml", "500 ml", "1 L"], image: "assets/products/panchmukhi.png" },

  { id: "peril", name: "PERIL", category: "Fungicides", formulation: "TEBUCONAZOLE 10% + SULPHAR 65% WG",
    description: "This product is intended to help control whiteflies and rot-related diseases while supporting better flowering and fruit development.", target: "The product controls whitefly and rot diseases and helps improve flowering and fruit setting.", dose: "500 gm per acre",
    packing: ["250 gm", "500 gm"], image: "assets/products/peril.png" },

  { id: "duggu-71", name: "DUGGU 71", category: "Herbicides", formulation: "GLYPHOSATE 71% SG",
    description: "The product appears to target various types of weeds that compete with crops for nutrients, water, and sunlight.", target: "The image appears to list several agricultural weeds and pests, including Cyperus rotundus (purple nutsedge), bermudagrass, Echinochloa (barnyard grass), and other weeds such as wild grasses and broadleaf weeds.", dose: "1000–1500 gm per acre",
    packing: ["100 gm", "500 gm", "1 Kg"], image: "assets/products/duggu-71.png" },

  { id: "kill-p", name: "KILL-P", category: "Herbicides", formulation: "GLYPHOSATE 41% SL",
    description: "The product is intended to control different types of weeds, including narrow-leaved grasses and broad-leaved weeds that grow among crops.", target: "All types of narrow-leaved and broad-leaved weeds, including various kinds of unwanted vegetation.", dose: "1200–2500 ml per acre",
    packing: ["250 ml", "500 ml", "1 L", "5 L"], image: "assets/products/kill-p.png" },

  { id: "dahan", name: "DAHAN", category: "Herbicides", formulation: "BISPYRIBAC SODIUM 10% W/V SC",
    description: "This product is used to control weeds in rice fields.", target: "Apply 10–12 days after sowing the rice seeds, or within 10–14 days after transplanting rice, when most weeds have emerged and have developed 3–4 leaves. The most suitable time to apply the product is within 15–25 days after transplanting rice.", dose: "Rice (Nursery): 100–125 ml, Rice (Transplanted): 100–150 ml, Rice (Direct-seeded): 100–150 ml.",
    packing: ["100 ml", "250 ml", "500 ml", "1 L"], image: "assets/products/dahan.png" },

  { id: "trikal", name: "TRIKAL", category: "Bio", formulation: "Bio Extract",
    description: "Trikal is an organic-based insecticide designed to control different types of crop-damaging caterpillars.", target: "This is an organic-matter-based insecticide that destroys various types of caterpillars. It can be used along with other insecticides, fungicides, and plant growth regulators.", dose: "Mix 25 ml of the product in 15 litres of water and spray it on the crop.", 
    packing: ["50 ml", "100 ml"], image: "assets/products/trikal.png" },

  { id: "jaago", name: "JAAGO", category: "Bio", formulation: "Bio Plant Promoter",
    description: "Jaago helps protect crops from harmful insects.", 
    target: "Jaago is effective against various pests that damage crops, including fruit borers, stem borers, and other caterpillars. It provides a strong protective effect against these harmful insects and helps protect crops from pest damage.", 
    dose: "Mix 20–25 ml of Jaago in 15 litres of water and spray thoroughly.", 
    packing: ["50 ml", "100 ml"], image: "assets/products/jaago.png" },

  { id: "humi-plus", name: "HUMI+", category: "Bio", formulation: "POTASSIUM HUMATE 98%",
    description: "Humi+ helps promote healthy plant growth.", 
    target: "It is an excellent product that possesses remarkable fungicidal and chelating properties.It increases the chlorophyll and sugar content, thereby enhancing the photosynthesis process.Along with increasing production, it also improves crop quality.", 
    packing: ["1 kg"], image: "assets/products/humi-plus.png" },

  { id: "extra-power", name: "EXTRA POWER", category: "Bio", formulation: "Bio Growth Enhancer",
    description: "Extra Power is a bio-stimulant.", 
    target: "Extra Power is a modern bio-stimulant that increases the availability of nutrients to crops. It helps increase the number of flowers and fruits, reduces crop stress, and prevents flowers from falling.", 
    dose: "Mix 5 ml of the product in 15 litres of water", 
    packing: ["undefined"], image: "assets/products/extra-power.png" },

  { id: "drone", name: "DRONE", category: "PGR", formulation: "SODIUM PARA-NITRO PHENOLATE 0.3% SL",
    description: "DRONE is a plant growth regulator.", 
    target: "DRONE helps improve plant growth and physiological activity, supports metabolic processes, and helps crops tolerate environmental stress.", 
    dose: "250–300 ml per acre",
    packing: ["100 ml", "250 ml", "500 ml", "1 L"], image: "assets/products/drone.png" },

  { id: "green-gold", name: "GREEN GOLD", category: "PGR", formulation: "Growth Regulator",
    description: "Green Gold is a plant growth-support product.", 
    target: "Helps promote the growth of leaves, branches, and stems, and supports the development of fruits and flowers.", 
    dose: "15–20 ml per 15 litre water",
    packing: ["100 ml", "250 ml", "500 ml"], image: "assets/products/green-gold.png" },

  { id: "p-20", name: "P-20", category: "PGR", formulation: "SILICON BASED EXCELLENT SPREADER",
    description: "P-20 is a silicon-based spreader.", 
    target: "All insecticides and fungicides to improve spreading and sticking of the spray solution on plant surfaces.", 
    dose: "5–10 ml in 15 litre water",
    packing: ["5 ml pouch", "100 ml", "250 ml", "500 ml"], image: "assets/products/p-20.png" }
];

const FEATURED_IDS = ["ira", "panchmukhi", "duggu-71", "trikal", "drone"];
const SAFETY_NOTE = "Use agricultural products only according to the approved product label, crop recommendations and applicable local regulations. Always follow recommended dosage, safety precautions and application instructions.";
