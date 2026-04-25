const items = [
  "Personal Effects & Household Items",
  "Wedding & Festival Shipments",
  "Religious & Puja Items",
  "Handloom & Handicrafts",
  "Kitchen Equipment & Utensils",
  "Furniture & Home Décor",
  "Student Relocations",
  "Gift Parcels from Family",
];

export function CargoMatters() {
  return (
    <section className="relative py-28 bg-[#F4F6F8] overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-12 -right-32 w-[500px] h-[3px] bg-[rgba(200,83,10,0.25)] -rotate-[35deg] origin-right pointer-events-none" />
      <div className="absolute bottom-20 -left-32 w-[400px] h-[3px] bg-[rgba(200,83,10,0.25)] rotate-[35deg] origin-left pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
        <span className="pill-tag" data-reveal>/ FOR FAMILIES & INDIVIDUALS</span>

        <div className="relative mt-8">
          <div className="ghost-text absolute -top-12 left-1/2 -translate-x-1/2 text-[14vw] md:text-[10vw] whitespace-nowrap">CARGO</div>
          <h2
            data-reveal-words
            className="relative font-display text-5xl md:text-7xl text-[#0F172A] leading-[0.95] max-w-4xl mx-auto"
          >
            SOME CARGO CARRIES <br />
            MORE THAN <span className="font-italic-serif text-brand normal-case">Weight</span>
          </h2>
        </div>

        <p data-reveal className="mt-8 text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed">
          We understand that your shipment might be a wedding trousseau from your parents, handloom sarees
          passed down through generations, your child's first bike from their grandparents, or spices that
          make your kitchen smell like home. These aren't just items — they're emotions, memories, and
          connections. We treat every personal shipment with that understanding.
        </p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={item}
              data-reveal
              className="group card-dakshin p-5 flex items-start gap-3 text-left hover:!border-[#C8530A]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="flex-none mt-0.5 w-5 h-5 rounded-full border border-brand flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
              </span>
              <span className="text-sm font-medium text-[#0F172A] leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
