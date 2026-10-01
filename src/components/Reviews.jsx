import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import useLang from "../i18n/useLang";

const AVATARS = ["🍓", "🍫", "🎀", "🥺", "😍", "💝"];

export default function Reviews() {
  const { t } = useLang();
  const looped = [...t.reviews.items, ...t.reviews.items];

  return (
    <section
      id="reviews"
      className="relative scroll-mt-24 overflow-hidden bg-choco-950 py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-choco-900 to-choco-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-16 size-80 rounded-full bg-berry-600/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 size-80 rounded-full bg-choco-600/30 blur-3xl"
      />

      <div className="container-page relative">
        <SectionHeading
          light
          eyebrow={t.reviews.eyebrow}
          title={t.reviews.title}
          subtitle={t.reviews.subtitle}
        />

        <Reveal delay={120} className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-cream/80 uppercase">
            <Star className="size-3.5 fill-berry-500 text-berry-500" />
            {t.reviews.rating}
          </span>
          <span className="rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-cream/80 uppercase">
            {t.reviews.posts}
          </span>
        </Reveal>
      </div>

      <div className="relative mt-12 sm:mt-14">
        <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 sm:px-8 lg:px-10 xl:px-[max(2.5rem,calc((100%-80rem)/2))]">
          {looped.map((review, index) => (
            <ReviewCard
              key={`${review.id}-${index}`}
              review={review}
              emoji={AVATARS[index % AVATARS.length]}
            />
          ))}
        </div>

        <p className="hide-scrollbar mt-4 overflow-x-auto px-5 text-center text-xs font-medium text-cream/45 sm:px-8">
          {t.reviews.swipeHint}
        </p>
      </div>
    </section>
  );
}

function ReviewCard({ review, emoji }) {
  return (
    <article className="flex w-[17rem] shrink-0 snap-start flex-col rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/12 sm:w-[19rem] sm:p-6">
      <Quote aria-hidden="true" className="size-6 text-berry-400/50" strokeWidth={2.2} />

      <p className="mt-3 flex-1 text-sm leading-relaxed text-pretty text-cream/85">
        {review.text}
      </p>

      <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-berry-500/60 to-choco-600/70 text-lg">
          {emoji}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-bold text-cream">{review.name}</span>
          <span className="block text-xs text-cream/50">{review.source}</span>
        </span>
        <span className="ml-auto flex shrink-0 gap-0.5">
          {Array.from({ length: review.rating }, (_, star) => (
            <Star key={star} aria-hidden="true" className="size-3.5 fill-berry-400 text-berry-400" />
          ))}
        </span>
      </div>
    </article>
  );
}