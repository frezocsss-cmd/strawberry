const modules = import.meta.glob("../assets/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
});

function parsePrice(basename) {
  const name = basename.toLowerCase();

  const millions = name.match(/(\d[\d._]*)\s*(?:mln|mn)/);
  if (millions) {
    const value = Number(millions[1].replace(/[^\d]/g, ""));
    return value ? value * 1_000_000 : null;
  }

  const thousands = name.match(/(\d[\d._]*)\s*ming/);
  if (thousands) {
    const value = Number(thousands[1].replace(/[^\d]/g, ""));
    return value ? value * 1_000 : null;
  }

  return null;
}

function parseName(basename) {
  const name = basename.toLowerCase();
  if (name.includes("love")) return "I love you";
  if (name.includes("mini")) return "Mini";
  return "";
}

// Card nomini shu yerda o'zgartiring: kalit = rasm faylining aniq nomi
export const NAMES = {
  "200_ming_mini.JPG": "Mini",
  "300_ming.JPG": "Клубничная нежность",
  "450_ming.jpg": "Сладкий комплимент",
  "550_ming.jpg": "Шоколадная классика",
  "650_ming.JPG": "Клубничное сердце",
  "650ming.jpg": "Романтика",
  "i-loveyou_650ming.jpg": "I love you",
  "700_ming.jpg": "Onam",
  "750.ming.jpg": "Шоколадный вечер",
  "ilove-you_750ming.JPG": "Люблю тебя",
  "800_ming.JPG": "Шоколадный букет",
  "850_ming.jpg": "Ягодное наслаждение",
  "1_mln.jpg": "Премиум коллекция",
  "1.200_ming.JPG": "Ассорти",
  "1.500_ming.jpg": "Большая коробка 60 см",
  "3_mln.JPG": "Королевский набор",
};

export const PRODUCTS = Object.entries(modules)
  .map(([path, image]) => {
    const basename = path.split("/").pop();
    const price = parsePrice(basename);
    if (price == null) return null;
    return {
      id: basename,
      image,
      price,
      name: basename in NAMES ? NAMES[basename] : parseName(basename),
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.price - b.price);
