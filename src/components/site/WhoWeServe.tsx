import { useState, useRef, useEffect } from "react";
import personalShipping from "@/assets/personal-shipping.png";
import businessShipping from "@/assets/business-shipping.png";

/* ── Card data ──────────────────────────────────────────────────── */
const cards = [
  {
    image: personalShipping,
    tag: "PERSONAL & D2C",
    tagIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    heading: "I am shipping my life.",
    subtitle:
      "Moving from India to Australia, or bringing a piece of home with you? We make it effortless.",
    bullets: [
      "Personal effects & household goods relocation",
      "Wedding trousseaus & festival shipments",
      "Religious & puja items — temples, idols, brass",
      "Handloom sarees, handicrafts & home décor",
      "Kitchen equipment & traditional utensils",
      "Student relocations & family gift parcels",
      "Custom sourcing from Indian artisans & vendors",
      "Door-to-door delivery across Australia",
    ],
  },
  {
    image: businessShipping,
    tag: "BUSINESS & B2B",
    tagIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    heading: "I am scaling my brand.",
    subtitle:
      "Expanding your Indian brand into the Australian market? We handle the complexity.",
    bullets: [
      "Recurring supply chain contracts & management",
      "FCL & LCL sea freight solutions",
      "Supplier sourcing & QC-vetted Indian vendors",
      "Customs compliance & documentation handling",
      "Warehousing & inventory management in Australia",
      "Amazon FBA & D2C fulfilment pipelines",
      "Consolidation & optimised freight packaging",
      "Dedicated account manager for your brand",
    ],
  },
];

/* ── Accordion card ─────────────────────────────────────────────── */
function ScenarioCard({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <article
      data-reveal
      className="group rounded-xl overflow-hidden"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Image card */}
      <div className="relative w-full min-h-[380px] md:min-h-[460px] overflow-hidden">
        <img
          src={card.image}
          alt={card.heading}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark gradient overlay — bottom half */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.65) 45%, rgba(15,23,42,0.15) 70%, transparent 100%)",
          }}
        />

        {/* Category tag — top left */}
        <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(200,83,10,0.15)] backdrop-blur-sm border border-[rgba(200,83,10,0.3)]">
          <span className="text-[#C8530A]">{card.tagIcon}</span>
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C8530A]">
            {card.tag}
          </span>
        </div>

        {/* Text overlay — bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
          <h3 className="font-display text-3xl md:text-5xl text-white leading-tight tracking-wide">
            {card.heading}
          </h3>
          <p className="mt-3 text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
            {card.subtitle}
          </p>
        </div>
      </div>

      {/* Expandable accordion */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 md:px-10 py-5 bg-white border border-t-0 border-[#E8ECF0] rounded-b-xl transition-colors hover:bg-[#FAFBFC] cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-sm md:text-base font-semibold text-[#0F172A] tracking-wide">
          {open ? "Tap to collapse" : "Tap to see what we solve"}
        </span>
        <span
          className="text-[#C8530A] transition-transform duration-300"
          style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </span>
      </button>

      {/* Accordion content */}
      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ maxHeight: open ? `${height}px` : "0px" }}
      >
        <div
          ref={contentRef}
          className="px-6 md:px-10 pb-8 pt-2 bg-white border border-t-0 border-[#E8ECF0] rounded-b-xl"
        >
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {card.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[#334155]">
                <span className="flex-none mt-1.5 w-2 h-2 rounded-full bg-[#C8530A]" />
                <span className="text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

/* ── Main section ───────────────────────────────────────────────── */
export function WhoWeServe() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* ── Header (Edit 1) ────────────────────────────────── */}
        <div className="text-center mb-16 md:mb-20">
          {/* Uppercase label */}
          <span
            data-reveal
            className="inline-block text-xs uppercase tracking-[0.3em] font-semibold text-[#C8530A] mb-5"
          >
            HOW CAN WE HELP?
          </span>

          {/* Elegant serif heading */}
          <h2
            data-reveal-words
            className="font-italic-serif text-4xl md:text-6xl text-[#0F172A] leading-[1.1] not-italic"
            style={{ fontStyle: "normal" }}
          >
            Solving by{" "}
            <span className="font-italic-serif italic text-[#C8530A]">
              Scenario
            </span>
          </h2>

          {/* Subtitle */}
          <p
            data-reveal
            className="mt-6 text-base md:text-lg text-[#334155] max-w-xl mx-auto leading-relaxed"
          >
            Every shipment is unique. Tell us who you are, and we'll show you
            exactly how we make the India‑to‑Australia crossing seamless.
          </p>

          {/* Decorative divider — line with dots */}
          <div
            data-reveal
            className="flex items-center justify-center gap-0 mt-10 mx-auto max-w-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#C8530A]" />
            <span className="flex-1 h-px bg-[#C8530A]/30 mx-1" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8530A]/60" />
            <span className="flex-1 h-px bg-[#C8530A]/30 mx-1" />
            <span className="w-2 h-2 rounded-full bg-[#C8530A]" />
          </div>
        </div>

        {/* ── Scenario cards (Edit 2) ────────────────────────── */}
        <div className="flex flex-col gap-10">
          {cards.map((card, i) => (
            <ScenarioCard key={card.tag} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
