import Button from "./Button";
import useLang from "../i18n/useLang";

export default function ProductCard({ product }) {
  const { t } = useLang();
  const { title, description, image, badge } = product;
  const displayTitle = product.name || title;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-2 sm:aspect-[5/4]">
        <img
          src={image}
          alt={displayTitle}
          width="1440"
          height="2560"
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        {badge ? (
          <span className="absolute top-3 left-3 rounded-full bg-choco-950/85 px-3 py-1 text-[0.68rem] font-bold tracking-[0.12em] text-cream uppercase backdrop-blur-sm">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg leading-snug font-semibold text-choco-950 sm:text-xl">
          {displayTitle}
        </h3>
        {description ? (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-pretty text-choco-800/70">
            {description}
          </p>
        ) : null}

        {product.price != null ? (
          <div className="mt-3 text-base font-semibold text-choco-950 sm:text-lg">
            {product.price.toLocaleString("ru-RU")} сум
          </div>
        ) : null}

        <Button
          as="a"
          href="#contacts"
          aria-label={`${t.catalog.orderAria}: ${product.name || title}`}
          className="mt-5 w-full px-4 py-2.5 text-[0.8rem] sm:text-sm"
        >
          {t.catalog.orderCta}
        </Button>
      </div>
    </article>
  );
}