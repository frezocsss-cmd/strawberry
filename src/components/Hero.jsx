import { ArrowDown, Sparkles, Star } from "lucide-react";
import Button from "./Button";
import BrandLogo from "./icons/BrandLogo";
import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";
import useLang from "../i18n/useLang";
import { BRAND } from "../data/brand";


const AVATARS = ["🍓", "🍫", "🎀"];

export default function Hero() {
  const { t } = useLang();
  const highlights = [...t.hero.highlights];
  highlights[2] = t.delivery.districts.join(" • ");

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-linear-to-b from-cream-2 via-cream to-cream pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      <Decorative />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal as="span" className="inline-flex items-center gap-2.5 rounded-full border border-berry-500/20 bg-white/70 py-1.5 pr-4 pl-1.5 text-xs font-bold tracking-[0.14em] text-berry-700 uppercase shadow-[0_8px_24px_-16px_rgba(229,57,53,0.8)] backdrop-blur-sm sm:text-[0.8rem]">
              <BrandLogo size="sm" className="!size-6 !rounded-full !shadow-none" />
              {BRAND.name}
            </Reveal>

            <Reveal
              as="h1"
              delay={90}
              className="mt-6 font-display text-[2.05rem] leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.9rem]"
            >
              {t.hero.title}{" "}
              <span className="text-gradient-berry italic">{t.hero.titleAccent}</span>
            </Reveal>

            <Reveal
              as="p"
              delay={170}
              className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-pretty text-choco-800/75 sm:text-lg"
            >
              {t.hero.subtitle}
            </Reveal>

            <Reveal as="ul" delay={240} className="mt-6 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-choco-700/12 bg-white/75 px-3.5 py-1.5 text-xs font-semibold text-choco-800 sm:text-[0.8rem]"
                >
                  {item}
                </li>
              ))}
            </Reveal>

            <Reveal
              as="div"
              delay={310}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button as="a" href="#contacts" size="lg" className="w-full sm:w-auto">
                {t.hero.orderNow}
                <ArrowDown className="size-4" strokeWidth={2.4} />
              </Button>
              <Button
                as="a"
                href="#catalog"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                {t.hero.viewCatalog}
              </Button>
            </Reveal>

            <Reveal
              as="div"
              delay={380}
              className="mt-7 flex items-center gap-3 text-sm text-choco-800/70"
            >
              <span className="flex -space-x-2">
                {AVATARS.map((emoji) => (
                  <span
                    key={emoji}
                    className="grid size-8 place-items-center rounded-full border-2 border-cream bg-white text-sm shadow-sm"
                  >
                    {emoji}
                  </span>
                ))}
              </span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-choco-900">
                <Star className="size-4 fill-berry-500 text-berry-500" />
                5.0
                <span className="font-medium text-choco-800/60">
                  · {BRAND.instagramHandle}
                </span>
              </span>
            </Reveal>
          </div>

          <Reveal direction="zoom" delay={140} className="relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-br from-berry-200/70 via-blush to-choco-600/25 blur-2xl"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[var(--shadow-lift)] sm:rounded-[2.5rem]">
                <ImagePlaceholder className="size-full" />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-choco-950/45 via-transparent to-transparent"
                />
              </div>

              <div className="animate-float absolute -bottom-5 -left-3 flex items-center gap-2.5 rounded-2xl border border-white/70 bg-white/90 px-3.5 py-2.5 shadow-[var(--shadow-soft)] backdrop-blur-md sm:-left-8 sm:px-4 sm:py-3">
                <span className="grid size-9 place-items-center rounded-xl bg-berry-200/70 text-base">
                  🎁
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-base font-bold text-choco-950">
                    {t.hero.giftBadge}
                  </span>
                  <span className="block text-[0.7rem] font-semibold text-choco-800/60 sm:text-xs">
                    {t.hero.ribbon}
                  </span>
                </span>
              </div>

              <div className="animate-float-slow absolute -top-4 -right-2 hidden items-center gap-2 rounded-2xl border border-white/70 bg-white/90 px-3.5 py-2.5 shadow-[var(--shadow-soft)] backdrop-blur-md sm:flex">
                <Sparkles className="size-4 text-berry-500" strokeWidth={2.4} />
                <span className="text-xs font-bold text-choco-900">
                  {t.hero.reviewsBadge}
                </span>
              </div>

              <div className="absolute -top-6 -left-6 -z-10 hidden overflow-hidden rounded-2xl border border-white/70 shadow-[var(--shadow-soft)] lg:block lg:w-32 xl:w-40">
                <ImagePlaceholder className="aspect-[3/4] w-full" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Decorative() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-24 -right-16 size-72 rounded-full bg-berry-400/25 blur-3xl sm:size-96" />
      <div className="absolute top-1/3 -left-24 size-72 rounded-full bg-choco-600/15 blur-3xl sm:size-80" />
      <div className="absolute right-[8%] bottom-[6%] hidden rotate-12 rounded-[1.75rem] border border-white/45 bg-white/25 lg:block lg:size-24" />
    </div>
  );
}