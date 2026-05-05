import crossingOcean from "@/assets/Cargo vessel crossing the Indian Ocean at sunset.png";
import personalShipping from "@/assets/personal-shipping.png";
import sourcingVerification from "@/assets/sourcing-verification.png";
import containerLoading from "@/assets/container-loading-port.png";
import oceanTracking from "@/assets/ocean-tracking.png";
import customsClearance from "@/assets/customs-clearance.png";
import warehouseQc from "@/assets/warehouse-qc.png";
import deliveryDoorstep from "@/assets/delivery-doorstep.png";

/* ── Icon components ────────────────────────────────────────────── */
const icons = {
  sourcing: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  consolidation: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  ocean: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  customs: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  warehouse: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  delivery: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
};

/* ── Timeline steps data ────────────────────────────────────────── */
const steps = [
  {
    label: "ORIGIN · INDIA",
    icon: icons.sourcing,
    title: "Sourcing & Verification",
    body: "We verify the source before the box is taped. Whether it's your personal effects from home or B2B inventory from Indian manufacturers, we inspect, verify quality, and prepare everything for export at origin.",
    coord: "13.0827°N, 80.2707°E",
    side: "left" as const,
    image: sourcingVerification,
  },
  {
    label: "CHENNAI PORT",
    icon: icons.consolidation,
    title: "Consolidation & Loading",
    body: "Your items don't wait around — they travel in our dedicated consolidation lanes from Mumbai, Chennai, and Delhi. LCL and FCL options, professional crating, fumigation certificates, and AQIS-compliant packaging.",
    coord: "13.1067°N, 80.2947°E",
    side: "right" as const,
    image: containerLoading,
  },
  {
    label: "≈ 18–22 DAYS",
    icon: icons.ocean,
    title: "The Ocean Crossing",
    body: "Direct carrier partnerships mean fewer transhipments and faster transit times. Real-time vessel tracking so you know exactly where your cargo is between Chennai Harbour and Port Botany, every single day.",
    coord: "Indian Ocean Transit",
    side: "left" as const,
    image: oceanTracking,
  },
  {
    label: "PORT BOTANY · SYDNEY",
    icon: icons.customs,
    title: "Customs & Compliance",
    body: "Automated compliance checks backed by human expertise. We handle ABF import declarations, AQIS biosecurity screening, duty calculations, and tariff classifications. No surprises at the border.",
    coord: "33.9461°S, 151.1868°E",
    side: "right" as const,
    image: customsClearance,
  },
  {
    label: "SYDNEY & MELBOURNE",
    icon: icons.warehouse,
    title: "Warehousing & Storage",
    body: "Need to hold stock before distribution? Our bonded and general warehouse facilities in Sydney and Melbourne let you stage inventory closer to your customers with flexible short and long-term storage.",
    coord: null,
    side: "left" as const,
    image: warehouseQc,
  },
  {
    label: "YOUR DOOR",
    icon: icons.delivery,
    title: "Last Mile Delivery",
    body: "From port to porch. We coordinate last mile delivery to residential and commercial addresses across Australia. White-glove handling for fragile items, scheduled delivery windows, and real-time ETAs.",
    coord: "Australia-wide",
    side: "right" as const,
    image: deliveryDoorstep,
  },
];

export function Crossing() {
  return (
    <section id="how" className="relative overflow-hidden">
      {/* ── Hero banner — cinematic ocean crossing (75% width, centered) ── */}
      <div className="bg-[#F4F6F8] py-10 md:py-16 px-6">
        <div className="relative w-full max-w-[75%] mx-auto h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={crossingOcean}
            alt="Cargo ship crossing the Indian Ocean at sunset"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.45) 50%, rgba(15,23,42,0.25) 100%)",
            }}
          />
          {/* Bottom text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              5.0°N · 85.0°E · INDIAN OCEAN
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white leading-tight tracking-wide mt-1">
              Chennai → Port Botany
            </h2>
            <p className="text-sm md:text-base text-white/60 mt-1">
              Avg. transit: 18–22 days · Direct carrier routes
            </p>
          </div>
        </div>
      </div>

      {/* ── Zig-zag timeline ─────────────────────────────────── */}
      <div className="relative bg-[#F4F6F8] py-20 md:py-28">
        {/* Central vertical dashed line — desktop only */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(200,83,10,0.3) 0px, rgba(200,83,10,0.3) 6px, transparent 6px, transparent 14px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          {steps.map((step, i) => {
            const isLeft = step.side === "left";

            return (
              <div
                key={i}
                className="relative md:grid md:grid-cols-2 md:gap-12 mb-24 md:mb-32 last:mb-0"
                data-reveal
              >
                {/* ── Timeline dot (desktop center) ─── */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#C8530A] shadow-[0_0_0_4px_#F4F6F8,0_0_0_5px_rgba(200,83,10,0.25)]" />
                </div>

                {/* ── Mobile dot (left edge) ─── */}
                <div className="flex md:hidden items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-[#C8530A] flex-none" />
                  <span className="h-px flex-1 bg-[rgba(200,83,10,0.2)]" />
                </div>

                {/* ── Text content block ─── */}
                <div
                  className={`${
                    isLeft
                      ? "md:col-start-1 md:text-right md:pr-12"
                      : "md:col-start-2 md:text-left md:pl-12"
                  }`}
                >
                  {/* Label + icon row */}
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      isLeft ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {isLeft && (
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2E6A8E]">
                        {step.label}
                      </span>
                    )}
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[rgba(200,83,10,0.08)] text-[#C8530A]">
                      {step.icon}
                    </span>
                    {!isLeft && (
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2E6A8E]">
                        {step.label}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-italic-serif text-2xl md:text-3xl text-[#0F172A] leading-tight mb-4"
                    style={{ fontStyle: "normal" }}
                  >
                    {step.title}
                  </h3>

                  {/* Body */}
                  <p
                    className={`text-[#334155] text-[15px] md:text-base leading-relaxed max-w-md ${
                      isLeft ? "md:ml-auto" : ""
                    }`}
                  >
                    {step.body}
                  </p>

                  {/* Coordinates */}
                  {step.coord && (
                    <p
                      className={`mt-4 text-[12px] tracking-wider text-[#94A3B8] ${
                        isLeft ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {step.coord}
                    </p>
                  )}
                </div>

                {/* ── Image block (opposite side) ─── */}
                <div
                  className={`mt-6 md:mt-0 ${
                    isLeft
                      ? "md:col-start-2 md:pl-12"
                      : "md:col-start-1 md:row-start-1 md:pr-12"
                  }`}
                >
                  <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[220px] md:h-[280px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom decorative divider ────────────────────────── */}
        <div className="flex items-center justify-center gap-0 mt-8 mx-auto max-w-xs">
          <span className="w-2 h-2 rounded-full bg-[#C8530A]" />
          <span className="flex-1 h-px bg-[#C8530A]/30 mx-1" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8530A]/60" />
          <span className="flex-1 h-px bg-[#C8530A]/30 mx-1" />
          <span className="w-2 h-2 rounded-full bg-[#C8530A]" />
        </div>
      </div>
    </section>
  );
}
