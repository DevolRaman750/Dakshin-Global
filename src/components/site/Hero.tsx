import { useEffect, useRef } from "react";
import heroOcean from "@/assets/hero-ocean.jpg";
import containerFloat from "@/assets/container-float.png";

// Video is hosted externally (too large for Git). The poster image
// (hero-ocean.jpg) acts as a static fallback when the video is unavailable.
const SHIP_VIDEO_URL = "/assets/hero-ship.mp4";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1.1)`;
      }
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0F172A]">
      {/* Parallax background — looping cinematic ship video */}
      <div
        ref={bgRef}
        className="absolute inset-0 transition-transform duration-[400ms] ease-out will-change-transform"
        data-parallax="0.4"
      >
        <video
          src={SHIP_VIDEO_URL}
          poster={heroOcean}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
          aria-label="Cargo ship sailing across the ocean"
          onError={(e) => {
            // If video fails to load, hide the element so the poster shows
            (e.currentTarget as HTMLVideoElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(15,23,42,0.82) 0%, rgba(15,23,42,0.65) 60%, rgba(15,23,42,0.80) 100%)"
        }} />
      </div>

      {/* Diagonal stripes overlay */}
      <div className="absolute inset-0 diagonal-stripes pointer-events-none opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-32 min-h-screen flex flex-col justify-center">
        <span className="pill-tag-dark self-start animate-in fade-in slide-in-from-bottom-4 duration-700">
          INDIA → AUSTRALIA · EST. 2024
        </span>

        <div className="relative mt-10">
          {/* Ghost text */}
          <div className="ghost-text-dark absolute -top-20 -left-4 md:-top-32 text-[18vw] md:text-[15vw] leading-none select-none">
            DAKSHIN
          </div>

          <h1
            ref={headlineRef}
            data-reveal-words
            className="relative font-display text-[12vw] md:text-[7.5vw] leading-[0.95] tracking-tight text-white max-w-5xl"
          >
            <span className="block">FROM INDIAN SHORES</span>
            <span className="block">
              TO AUSTRALIAN{" "}
              <span className="font-italic-serif text-brand normal-case">Doors</span>
            </span>
          </h1>
        </div>

        <p className="relative mt-8 text-lg md:text-xl text-white/70 max-w-xl">
          5,800 nautical miles. <span className="text-brand">One trusted partner.</span>
        </p>

        <div className="relative mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">
            Start Your Passage
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#how" className="btn-outline-dark">How We Work</a>
        </div>
      </div>

      {/* Floating container bottom right */}
      <img
        src={containerFloat}
        alt=""
        aria-hidden
        className="absolute bottom-[-60px] right-[-80px] w-[420px] md:w-[620px] float-anim opacity-90 pointer-events-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
        style={{ ["--rot" as never]: "-8deg" }}
        loading="eager"
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] tracking-[0.3em] text-white/40">SCROLL</span>
        <div className="w-px h-16 bg-brand/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand scroll-indicator-line" />
        </div>
      </div>
    </section>
  );
}
