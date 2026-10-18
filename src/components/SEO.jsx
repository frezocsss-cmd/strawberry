import React, { useEffect } from "react";

/**
 * SEO component for dynamically setting head tags and JSON-LD schema
 * Works seamlessly in React SPA without requiring additional heavy libraries.
 */
export default function SEO({
  title = "Chocoberry | Shokoladli Qulpinay va Sovg'alar Toshkent",
  description = "Toshkentda shokoladli qulpinaylar, meva bokslari va eksklyuziv shirin sovg'alar to'plami. 1,5 soatda yetkazib berish. Chocoberry bilan hoziroq buyurtma bering!",
  canonical = "https://www.chocoberry-n1.uz/",
  image = "https://www.chocoberry-n1.uz/og-image.jpg",
}) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) {
      setMeta("description", description);
      setMeta("og:description", description, true);
      setMeta("twitter:description", description);
    }

    if (title) {
      setMeta("og:title", title, true);
      setMeta("twitter:title", title);
    }

    if (image) {
      setMeta("og:image", image, true);
      setMeta("twitter:image", image);
    }

    if (canonical) {
      setMeta("og:url", canonical, true);
      setMeta("twitter:url", canonical);
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", canonical);
    }
  }, [title, description, canonical, image]);

  return null;
}
