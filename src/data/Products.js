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

export const PRODUCTS = Object.entries(modules)
  .map(([path, image]) => {
    const basename = path.split("/").pop();
    const price = parsePrice(basename);
    if (price == null) return null;
    return {
      id: basename,
      image,
      price,
      name: parseName(basename),
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.price - b.price);
