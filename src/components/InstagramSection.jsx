import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import ImagePlaceholder from "./ImagePlaceholder";
import InstagramIcon from "./icons/InstagramIcon";
import TelegramIcon from "./icons/TelegramIcon";
import useLang from "../i18n/useLang";
import { BRAND, GALLERY } from "../data/brand";

export default function InstagramSection() {
  const { t } = useLang();
  const subtitle = `${t.brand.posts} ${t.instagram.postsLabel} · ${t.brand.followers} ${t.instagram.followersLabel} · ${t.instagram.freshLabel}`;

  return (
    <section className="relative bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.instagram.eyebrow}
          title={t.instagram.title}
          subtitle={subtitle}
        />

        <Reveal delay={140} className="mt-10 grid grid-cols-3 gap-2.5 sm:mt-12 sm:gap-3">
          {GALLERY.map((image, index) => (
            <a
              key={index}
              href={BRAND.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={t.instagram.tileAria}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/60 bg-cream-2 shadow-[0_10px_30px_-20px_rgba(42,23,16,0.6)] sm:rounded-3xl"
            >
              {image ? (
                <img
                  src={image}
                  alt={`${BRAND.name} — ${index + 1}`}
                  width="1440"
                  height="2560"
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              ) : (
                <ImagePlaceholder className="size-full" />
              )}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-choco-950/0 transition-colors duration-300 group-hover:bg-choco-950/25"
              />
              <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <InstagramIcon className="size-6 text-white" />
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={120} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            as="a"
            href={BRAND.instagram}
            target="_blank"
            rel="noreferrer noopener"
            size="lg"
            className="w-full sm:w-auto"
          >
            <InstagramIcon className="size-4.5" />
            {t.instagram.open}
          </Button>
          <Button
            as="a"
            href={BRAND.telegram}
            target="_blank"
            rel="noreferrer noopener"
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
          >
            <TelegramIcon className="size-4.5" />
            {t.cta.telegram}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}