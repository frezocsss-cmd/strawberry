import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import useLang from "../i18n/useLang";
import { PRODUCTS } from "../data/Products";

export default function Products() {
  const { t } = useLang();

  return (
    <section id="catalog" className="relative scroll-mt-24 bg-cream py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-choco-700/12 to-transparent"
      />

      <div className="container-page">
        <SectionHeading
          eyebrow={t.catalog.eyebrow}
          title={t.catalog.title}
          subtitle={t.catalog.subtitle}
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delay={(index % 3) * 110}>
              <ProductCard product={{ ...product, title: product.name || t.catalog.itemName }} />
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-berry-500/15 bg-linear-to-br from-berry-200/50 via-cream to-choco-600/10 p-7 text-center sm:flex-row sm:justify-between sm:text-left sm:p-9"
        >
          <div>
            <p className="font-display text-xl font-semibold text-choco-950 sm:text-2xl">
              {t.catalog.notFoundTitle}
            </p>
            <p className="mt-1.5 text-sm text-choco-800/70 sm:text-[0.95rem]">
              {t.catalog.notFoundText}
            </p>
          </div>
          <Button as="a" href="#contacts" size="lg" className="w-full shrink-0 sm:w-auto">
            {t.catalog.discuss}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}