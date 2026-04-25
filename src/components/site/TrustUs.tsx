const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
    ),
    title: "One Invoice, Zero Surprises",
    body: "We quote all-inclusive. Pickup, consolidation, shipping, customs, duties, delivery — everything is costed upfront in a single, clear invoice. No fluctuating payments, no hidden extras, no last-minute charges.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: "We Speak Your Language",
    body: "Born from the Indian-Australian community, we understand the cultural nuances, the emotional weight of personal shipments, and the business customs on both sides. Communication in Hindi, Tamil, Telugu, Gujarati, and more.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
    ),
    title: "Our Own Consolidation",
    body: "Unlike brokers who outsource everything, we run our own consolidation operations in India. This means better quality control, faster turnaround, and lower costs passed directly to you.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
    ),
    title: "Proactive Tracking & Communication",
    body: "You won't need to chase us. We proactively update you at every milestone — pickup confirmation, consolidation complete, vessel departure, customs clearance, and delivery scheduling.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
    ),
    title: "Vetted Supplier Network",
    body: "For sourcing clients, our pre-negotiated supplier relationships mean better pricing, reliable quality, and reduced risk. Every supplier in our network has been personally vetted and audited.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>
    ),
    title: "ECTA Expertise",
    body: "As of 2026, 100% of Indian exports enter Australia duty-free under ECTA. Many importers still overpay because of incorrect documentation. Our brokers ensure you capture every tariff benefit available.",
  },
];

export function TrustUs() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 diagonal-stripes opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="pill-tag" data-reveal>/ THE DAKSHIN DIFFERENCE</span>
          <div className="relative mt-8">
            <div className="ghost-text absolute -top-10 left-1/2 -translate-x-1/2 text-[14vw] md:text-[10vw] whitespace-nowrap">TRUST</div>
            <h2
              data-reveal-words
              className="relative font-display text-5xl md:text-7xl text-[#0F172A] leading-[0.95]"
            >
              WHY FAMILIES & BUSINESSES <br />
              <span className="font-italic-serif text-brand normal-case">Trust Us</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              data-reveal
              className="card-dakshin p-7 group relative overflow-hidden"
            >
              {/* Sheen on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(200,83,10,0.08),transparent_60%)]" />

              <div className="relative">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-[#FFF7ED] border border-[#C8530A]/30 text-brand mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {f.icon}
                </div>
                <h3 className="font-display text-2xl text-[#0F172A] mb-3 tracking-wide">{f.title}</h3>
                <p className="text-[#334155] leading-relaxed text-[15px]">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
