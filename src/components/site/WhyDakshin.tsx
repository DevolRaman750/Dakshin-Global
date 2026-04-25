const features = [
  { icon: "🔍", title: "QC-Vetted Suppliers", body: "We don't just book freight. We know who's packing your goods." },
  { icon: "🌊", title: "Sea & Air Options", body: "Flexible based on urgency and budget." },
  { icon: "📦", title: "Full Process Management", body: "From sourcing in India to delivery in Australia." },
  { icon: "🤝", title: "D2C & B2B Experience", body: "Whether you're one person or a growing business." },
  { icon: "🔒", title: "Transparent Pricing", body: "No hidden fees. Ever." },
  { icon: "📍", title: "Australia-Based Contact", body: "Someone to call in your timezone." },
];

export function WhyDakshin() {
  return (
    <section id="services" className="relative py-28 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <span className="pill-tag">/ WHY DAKSHIN</span>
        <h2 className="mt-6 font-display text-5xl md:text-7xl text-[#0F172A] leading-[0.95] max-w-3xl">
          BUILT ON <span className="font-italic-serif text-brand normal-case">Trust</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              data-reveal
              className="card-dakshin p-8 border-l-[3px] !border-l-[#C8530A]"
            >
              <div className="text-3xl text-brand mb-5">{f.icon}</div>
              <h3 className="font-display text-2xl text-[#0F172A] mb-3 tracking-wide">{f.title}</h3>
              <p className="text-[#334155] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
