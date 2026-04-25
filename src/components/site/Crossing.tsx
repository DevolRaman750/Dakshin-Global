import containersCrane from "@/assets/containers-crane.png";

const stages = [
  { n: "01", title: "YOU TELL US WHAT YOU NEED", body: "Brief us on what you're shipping or sourcing." },
  { n: "02", title: "WE SOURCE FROM VERIFIED SUPPLIERS", body: "Our QC-vetted Indian supplier network goes to work." },
  { n: "03", title: "QUALITY CHECKED BEFORE IT LEAVES", body: "Every shipment inspected before consolidation." },
  { n: "04", title: "CONSOLIDATED & PACKED", body: "Optimised for sea or air freight." },
  { n: "05", title: "5,800 NAUTICAL MILES", body: "Sea freight or air — we manage the crossing." },
  { n: "06", title: "YOUR DOOR. AUSTRALIA.", body: "Last mile delivery or warehousing on arrival." },
];

export function Crossing() {
  return (
    <section id="how" className="relative py-28 bg-[#F4F6F8] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-[500px] h-[3px] bg-[rgba(200,83,10,0.25)] rotate-[35deg] origin-left" />
        <div className="absolute top-40 -left-10 w-[400px] h-[3px] bg-[rgba(200,83,10,0.20)] rotate-[35deg] origin-left" />
        <div className="absolute bottom-40 -right-20 w-[500px] h-[3px] bg-[rgba(200,83,10,0.25)] -rotate-[35deg] origin-right" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <span className="pill-tag">/ THE CROSSING</span>

        <div className="relative mt-8 mb-16">
          <div className="ghost-text absolute -top-10 left-0 text-[18vw] md:text-[14vw]">JOURNEY</div>
          <h2 className="relative font-display text-5xl md:text-7xl text-[#0F172A] leading-[0.95]">
            THE <span className="font-italic-serif text-brand normal-case">Crossing</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12">
          <ol className="relative space-y-12 lg:space-y-16 pl-8 border-l border-dashed border-[rgba(200,83,10,0.4)]">
            {stages.map((s) => (
              <li key={s.n} data-reveal className="relative">
                <span className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full bg-[#F4F6F8] border-2 border-brand" />
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center py-1 px-3 text-[10px] uppercase tracking-[0.18em] font-semibold rounded-full border border-[#C8530A] text-[#C8530A] bg-transparent">{s.n}</span>
                  <h3 className="font-display text-xl md:text-2xl text-[#0F172A] tracking-wide">{s.title}</h3>
                </div>
                <p className="text-[#334155] max-w-xl">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="hidden lg:block sticky top-32 self-start">
            <img
              src={containersCrane}
              alt="Cargo containers on cranes"
              className="w-[420px] float-anim-slow drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
