// imports (place at top of file)
import imgArabianDusk from "./assets/images/attar-arabiandusk.jpeg";
import imgArz from "./assets/images/attar-ARZ.jpeg";
import imgVanillaMusk from "./assets/images/attar-vanillamusk.jpeg";
import imgBerryBlush from "./assets/images/attar-berryblush.jpeg";
import imgBlackRose from "./assets/images/attar-blackrose.jpeg";
import imgRoyalAmethyst from "./assets/images/attar-royalamethyst.jpeg";
import imgSpiceWood from "./assets/images/attar-spicewood.jpeg";
import imgWhiteOud from "./assets/images/attar-whiteOUD.jpeg";
import imgForestDew from "./assets/images/attar-forestdew.jpeg";
import imgGreenMusk from "./assets/images/attar-khus.jpeg"; // using khus visual for green musk
import imgSpringAura from "./assets/images/attar-shanaya.jpeg"; // spring aura visual
import imgWhiteMusk from "./assets/images/attar-whitemusk.jpeg";
import imgCamphorOil from "./assets/images/attar-camphor.jpeg";
import imgGenda from "./assets/images/attar-genda.jpeg";
import imgGeeliMitti from "./assets/images/attar-geeli-mitti.jpeg";
import imgHennaPowder from "./assets/images/attar-heena-powder.jpeg";
import imgSandalPowder from "./assets/images/attar-sandalwood-powder.jpeg";
import imgSolidCamphor from "./assets/images/attar-solid-camphor.jpeg";
import imgSandalStick from "./assets/images/attar-sandalwood-stick.jpeg";
// at the top of your file (e.g. App.jsx or products.js)
import roseImg from "./assets/images/attar-rose.jpeg";
import sandalImg from "./assets/images/attar-sandal.jpeg";
import belaImg from "./assets/images/attar-bela.jpeg";
import fitratImg from "./assets/images/attar-fitrat.jpeg";
import greenMuskImg from "./assets/images/attar-greenmusk.jpeg";
import kastooriImg from "./assets/images/attar-kastoori.jpeg";
import mograImg from "./assets/images/attar-mogra.jpeg";
import jasmineImg from "./assets/images/attar-jasmine.jpeg";
import roseWaterImg from "./assets/images/attar-rose-water.jpeg";
import sandalDhoopImg from "./assets/images/attar-sandal-dhoop.jpeg";
import lavenderDhoopImg from "./assets/images/attar-lavendar-dhoop.jpeg";



export const CATEGORY_OPTIONS = ["All", "Attar", "Dhoop", "Ritual"];
export const GENDER_OPTIONS = ["All", "Men", "Women", "Unisex"];

export const PRODUCTS = [
  {
    id: 1,
    name: "Rose Attar",
    gender: "unisex",
    tag: "Soft, dewy desi gulab with a classic romantic trail.",
    qty: "6 ml",
    price: "₹ 949",
    image: roseImg,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 2,
    name: "Sandalwood Attar",
    gender: "unisex",
    tag: "Warm, creamy chandan that calms and centers the senses.",
    qty: "6 ml",
    price: "₹ 1,149",
    image: sandalImg,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 3,
    name: "Bela Attar",
    gender: "unisex",
    tag: "Fresh night‑blooming jasmine with a luminous white floral aura.",
    qty: "6 ml",
    price: "₹ 1,249",
    image: belaImg,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 4,
    name: "Fitrat Attar",
    gender: "unisex",
    tag: "Earthy, nature‑inspired blend that feels raw, green and grounded.",
    qty: "6 ml",
    price: "₹ 1,549",
    image: fitratImg,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 5,
    name: "Green Musk Attar",
    gender: "unisex",
    tag: "Soft green musk with a clean, subtly sweet skin‑scent effect.",
    qty: "6 ml",
    price: "₹ 1,549",
    image: greenMuskImg,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 6,
    name: "Kastoori Attar",
    gender: "unisex",
    tag: "Deep, animalic musk style attar with an enveloping warmth.",
    qty: "6 ml",
    price: "₹ 1,549",
    image: kastooriImg,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 7,
    name: "Mogra Attar",
    gender: "unisex",
    tag: "Intense Indian mogra garland vibe, lush and devotional.",
    qty: "6 ml",
    price: "₹ 1,549",
    image: mograImg,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 8,
    name: "Jasmine Attar",
    gender: "unisex",
    tag: "Bright chameli florals with a green, uplifting freshness.",
    qty: "6 ml",
    price: "₹ 1,549",
    image: jasmineImg,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 9,
    name: "Arabian Dusk Attar",
    gender: "Men",
    tag: "A floral and woody veil of agarwood, Bulgarian rose and lily of the valley.",
    qty: "6 ml",
    price: "₹ 1,199",
    image: imgArabianDusk,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 10,
    name: "ARZ Attar",
    gender: "Men",
    tag: "Fresh, spicy and woody with bright bergamot over a warm ambroxan amber base.",
    qty: "6 ml",
    price: "₹ 1,199",
    image: imgArz,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 11,
    name: "Vanilla Musk Attar",
    gender: "Unisex",
    tag: "Lemon and raspberry over jasmine and orange blossom, melting into vanilla, amber and musk.",
    qty: "6 ml",
    price: "₹ 1,299",
    image: imgVanillaMusk,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 12,
    name: "Berry Blush Attar",
    gender: "Women",
    tag: "Crushed berries with violet and jasmine, rounded by woods and creamy amber.",
    qty: "6 ml",
    price: "₹ 1,099",
    image: imgBerryBlush,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 13,
    name: "Black Rose Attar",
    gender: "Women",
    tag: "Sun-drenched jasmine flower and peach nectar kissed with a touch of rose.",
    qty: "6 ml",
    price: "₹ 1,199",
    image: imgBlackRose,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 14,
    name: "Royal Amethyst Attar",
    gender: "Unisex",
    tag: "Smoky oud with bright citrus, warm saffron and spicy pink pepper.",
    qty: "6 ml",
    price: "₹ 1,399",
    image: imgRoyalAmethyst,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 15,
    name: "Spice Wood Attar",
    gender: "Men",
    tag: "Modern fresh woods wrapped around a spicy, aromatic heart.",
    qty: "6 ml",
    price: "₹ 1,199",
    image: imgSpiceWood,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 16,
    name: "White Oud Attar",
    gender: "Unisex",
    tag: "A fresh floral take on oud with a soft woody-oriental trail.",
    qty: "6 ml",
    price: "₹ 1,499",
    image: imgWhiteOud,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 17,
    name: "Spring Aura Attar",
    gender: "Women",
    tag: "Sweet gardenia with a fruity opening and a warm sugar-soft base.",
    qty: "6 ml",
    price: "₹ 1,099",
    image: imgSpringAura,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 18,
    name: "Green Musk Attar",
    gender: "Unisex",
    tag: "Grapefruit and quince lifted by fresh white basil over soft musk.",
    qty: "6 ml",
    price: "₹ 1,199",
    image: imgGreenMusk,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 19,
    name: "Forest Dew Attar",
    gender: "Unisex",
    tag: "Long-lasting, alcohol-free blend of floral, citrus and spicy notes.",
    qty: "6 ml",
    price: "₹ 1,299",
    image: imgForestDew,
    category: CATEGORY_OPTIONS[1]
  },

  // Extra attars from your images (own descriptions)
  {
    id: 20,
    name: "White Musk Attar",
    gender: "Unisex",
    tag: "Clean, soft musk with a gentle powdery, skin-scent finish.",
    qty: "6 ml",
    price: "₹ 1,099",
    image: imgWhiteMusk,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 21,
    name: "Shanaya Attar",
    gender: "Women",
    tag: "Modern gourmand floral with creamy woods and a warm glow.",
    qty: "6 ml",
    price: "₹ 1,199",
    image: imgSpringAura,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 22,
    name: "Geeli Mitti Attar",
    gender: "Unisex",
    tag: "Authentic petrichor — the first rain on dry earth captured in a bottle.",
    qty: "6 ml",
    price: "₹ 1,099",
    image: imgGeeliMitti,
    category: CATEGORY_OPTIONS[1]
  },
  {
    id: 23,
    name: "Genda Attar",
    gender: "Unisex",
    tag: "Traditional marigold garlands with an earthy, temple-like aura.",
    qty: "6 ml",
    price: "₹ 1,099",
    image: imgGenda,
    category: CATEGORY_OPTIONS[1]
  },

  // Non-attar products
  {
    id: 24,
    name: "Pure Camphor Tablets",
    gender: "Unisex",
    tag: "High-purity camphor tablets for a clean, uplifting aroma in rituals and home.",
    qty: "Pack",
    price: "₹ 249",
    image: imgSolidCamphor,
    category: CATEGORY_OPTIONS[3]
  },
  {
    id: 25,
    name: "Camphor Oil",
    gender: "Unisex",
    tag: "Cooling camphor oil for diffusers, rituals and aromatic blends.",
    qty: "15 ml",
    price: "₹ 299",
    image: imgCamphorOil,
    category: CATEGORY_OPTIONS[3]
  },
  {
    id: 26,
    name: "Pure Sandalwood Powder",
    gender: "Unisex",
    tag: "Finely milled sandalwood for puja, skincare and traditional rituals.",
    qty: "100 g",
    price: "₹ 399",
    image: imgSandalPowder,
    category: CATEGORY_OPTIONS[3]
  },
  {
    id: 27,
    name: "Pure Henna Powder",
    gender: "Unisex",
    tag: "Natural henna powder for rich, conditioning hair colour.",
    qty: "200 g",
    price: "₹ 349",
    image: imgHennaPowder,
    category: CATEGORY_OPTIONS[3]
  },
  {
    id: 28,
    name: "Sandalwood Stick",
    gender: "Unisex",
    tag: "Smooth sandalwood stick for traditional grinding and bespoke paste.",
    qty: "1 piece",
    price: "₹ 499",
    image: imgSandalStick,
    category: CATEGORY_OPTIONS[3]
  },
  {
    id: 29,
    name: "Rose Water",
    gender: "Unisex",
    tag: "Delicate steam‑distilled gulab jal for skin and rituals.",
    qty: "100 ml",
    price: "₹ 349",
    image: roseWaterImg,
    category: CATEGORY_OPTIONS[3]
  },
  {
    id: 30,
    name: "Sandal Dhoop",
    gender: "Unisex",
    tag: "Slow‑burning chandan dhoop that fills spaces with temple calm.",
    qty: "Pack",
    price: "₹ 249",
    image: sandalDhoopImg,
    category: CATEGORY_OPTIONS[2]
  },
  {
    id: 31,
    name: "Lavender Dhoop",
    gender: "Unisex",
    tag: "Soothing lavender smoke for relaxed evenings and sleep rituals.",
    qty: "Pack",
    price: "₹ 249",
    image: lavenderDhoopImg,
    category: CATEGORY_OPTIONS[2]
  },
];
