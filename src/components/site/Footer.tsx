import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t-2 border-[#C8530A] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Dakshin Global" className="w-10 h-10 object-contain rounded-full" />
            <span className="font-display text-lg tracking-[0.2em] text-white">DAKSHIN GLOBAL</span>
          </div>
          <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">From Indian Shores to Australian Doors.</p>
          <a href="https://wa.me/61424567228" className="text-brand hover:text-[var(--brand-hover)] text-sm font-semibold">+61 424 567 228</a>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.25em] text-brand mb-4">SERVICES</h4>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li>Personal Shipping</li><li>Custom Sourcing</li><li>B2B Supply Chain</li>
            <li>FCL</li><li>LCL</li><li>Warehousing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.25em] text-brand mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#how" className="hover:text-white">How It Works</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.25em] text-brand mb-4">CONTACT</h4>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li><a href="https://wa.me/61424567228" className="hover:text-white">WhatsApp: +61 424 567 228</a></li>
            <li><a href="mailto:hello@dakshinglobal.com" className="hover:text-white">hello@dakshinglobal.com</a></li>
            <li>Sydney, Australia</li>
            <li>India Operations</li>
          </ul>
          <div className="flex gap-4 mt-5 text-[#94A3B8]">
            <a href="#" aria-label="Instagram" className="hover:text-[#C8530A]">IG</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#C8530A]">IN</a>
            <a href="https://wa.me/61424567228" aria-label="WhatsApp" className="hover:text-[#C8530A]">WA</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-[#94A3B8]">
        <span>© 2024 Dakshin Global · All Rights Reserved</span>
        <span>Built for the India ↔ Australia corridor</span>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/61424567228"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#2E6A8E] hover:bg-[#24597A] shadow-[0_10px_40px_rgba(46,106,142,0.4)] flex items-center justify-center text-white transition-transform hover:scale-110"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.519 5.27l.99-3.617 3.98 1.648z"/></svg>
    </a>
  );
}
