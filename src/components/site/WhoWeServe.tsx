const cards = [
  {
    icon: "🏠",
    title: "Shipping a piece of home?",
    eyebrow: "For Individuals & Families",
    body: "You're an Indian living in Australia. Maybe you want to bring your belongings over, source a custom-made temple, handloom furniture, or that one thing you can't find here. We handle the entire journey — sourcing, QC, packing, shipping, delivery to your door.",
    tags: ["Personal Effects", "Custom Sourcing", "Temple & Religious Items", "Household Goods"],
  },
  {
    icon: "🏢",
    title: "Scaling your supply chain?",
    eyebrow: "For Businesses",
    body: "You're a business sourcing products from India — recurring shipments, supplier management, consolidation, FCL contracts. We become your logistics partner, not just a shipping company.",
    tags: ["Supply Chain Contracts", "FCL Shipping", "Recurring LCL", "Warehousing"],
  },
];

export function WhoWeServe() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="pill-tag">/ SOLVING BY SCENARIO</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl text-[#0F172A] max-w-3xl leading-[0.95]">
          WHO WE <span className="font-italic-serif text-brand normal-case">Serve</span>
        </h2>

        <div className="relative mt-16 grid md:grid-cols-2 gap-8">
          {/* Vertical dashed connector */}
          <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center">
            <div className="flex-1 w-px border-l border-dashed border-[rgba(200,83,10,0.4)]" />
            <div className="w-3 h-3 rounded-full bg-brand my-2 shadow-[0_0_20px_rgba(200,83,10,0.4)]" />
            <div className="flex-1 w-px border-l border-dashed border-[rgba(200,83,10,0.4)]" />
          </div>

          {cards.map((c, i) => (
            <article
              key={i}
              className="card-dakshin p-8 md:p-10 border-l-[3px] !border-l-brand"
              data-reveal
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand mb-3">{c.eyebrow}</div>
              <h3 className="font-display text-3xl md:text-4xl text-[#0F172A] leading-tight mb-5">{c.title}</h3>
              <p className="text-[#334155] leading-relaxed mb-6">{c.body}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {c.tags.map(t => (
                  <span key={t} className="text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#2E6A8E] bg-[#EFF6FF] text-[#2E6A8E]">
                    {t}
                  </span>
                ))}
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-brand hover:text-[var(--brand-hover)] font-semibold tracking-wider uppercase text-sm group">
                This Is Me
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
