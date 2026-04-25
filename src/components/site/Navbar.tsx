import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#how", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-[0_1px_12px_rgba(15,23,42,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-brand group-hover:scale-150 transition-transform" />
          <span className={`font-display text-xl tracking-[0.2em] transition-colors duration-500 ${scrolled ? "" : "text-white"}`}>
            <span className={scrolled ? "text-[#C8530A]" : ""}>DAKSHIN</span>{" "}
            <span className={scrolled ? "text-[#0F172A]" : ""}>GLOBAL</span>
          </span>
        </a>

        <ul className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 ${
          scrolled
            ? "bg-[#F4F6F8] border border-[#E8ECF0]"
            : "bg-white/[0.03] border border-white/10"
        }`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-4 py-2 text-sm transition-colors rounded-full ${
                  scrolled
                    ? "text-[#334155] hover:text-[#C8530A] hover:bg-[#C8530A]/5"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/61424567228"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex items-center gap-2 py-2.5 px-5 text-xs font-semibold tracking-[0.05em] uppercase rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-[#2E6A8E] text-white hover:bg-[#24597A]"
              : "btn-primary !py-2.5 !px-5 !text-xs"
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.519 5.27l.99-3.617 3.98 1.648z"/></svg>
          +61 424 567 228
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 transition-colors duration-500 ${scrolled ? "text-[#0F172A]" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6"/> : <path d="M3 6h18M3 12h18M3 18h18"/>}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-[#E8ECF0] px-6 py-6 space-y-4 shadow-[0_4px_24px_rgba(15,23,42,0.08)]">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-[#334155] hover:text-[#C8530A]">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/61424567228" className="bg-[#2E6A8E] text-white w-full justify-center inline-flex items-center gap-2 py-3 px-5 text-xs font-semibold tracking-[0.05em] uppercase rounded-full">WhatsApp Us</a>
        </div>
      )}
    </header>
  );
}
