import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 14;

export function ScrollProgressShip() {
  const fillRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);
  const wakeRef = useRef<HTMLDivElement>(null);
  const mistRef = useRef<HTMLDivElement>(null);
  const nmRef = useRef<HTMLSpanElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const targetRef = useRef(0);
  const currentRef = useRef(0);

  const particleState = useRef<
    Array<{ el: HTMLSpanElement; offset: number; speed: number; size: number; phase: number }>
  >([]);

  useEffect(() => {
    if (particlesRef.current && particleState.current.length === 0) {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const el = document.createElement("span");
        const size = 2 + Math.random() * 3;
        el.style.cssText = `position:absolute;top:50%;left:0;width:${size}px;height:${size}px;border-radius:9999px;background:rgba(200,83,10,0.7);box-shadow:0 0 6px rgba(200,83,10,0.4);will-change:transform,opacity;pointer-events:none;`;
        particlesRef.current.appendChild(el);
        particleState.current.push({
          el,
          offset: 6 + Math.random() * 70,
          speed: 0.4 + Math.random() * 0.8,
          size,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    const compute = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      targetRef.current = scrollable > 0 ? Math.min(1, Math.max(0, h.scrollTop / scrollable)) : 0;
    };

    const tick = (t: number) => {
      currentRef.current += (targetRef.current - currentRef.current) * 0.12;
      const p = currentRef.current;
      const pct = p * 100;

      if (fillRef.current) fillRef.current.style.width = `${pct}%`;
      if (shipRef.current) shipRef.current.style.transform = `translate3d(calc(${pct}cqw - 14px), -50%, 0)`;
      if (nmRef.current) nmRef.current.textContent = `${Math.round(p * 5800).toLocaleString()} NM`;

      const intensity = Math.sin(Math.PI * p);
      const wakeLen = 20 + intensity * 90;
      if (wakeRef.current) {
        wakeRef.current.style.width = `${wakeLen}px`;
        wakeRef.current.style.opacity = `${0.3 + intensity * 0.7}`;
      }
      if (mistRef.current) {
        mistRef.current.style.opacity = `${intensity * 0.55}`;
        mistRef.current.style.transform = `translate3d(calc(${pct}cqw - 60px), -50%, 0) scale(${0.6 + intensity * 0.6})`;
      }

      const time = t * 0.001;
      for (let i = 0; i < particleState.current.length; i++) {
        const ps = particleState.current[i];
        const drift = (ps.offset + ((time * ps.speed * 30) % 80)) % 90;
        const bob = Math.sin(time * 1.6 + ps.phase) * 3;
        const alpha = intensity * (1 - drift / 90) * 0.9;
        ps.el.style.transform = `translate3d(calc(${pct}cqw - 14px - ${drift}px), calc(-50% + ${bob}px), 0)`;
        ps.el.style.opacity = `${alpha}`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    compute();
    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-20 left-0 right-0 z-40 pointer-events-none"
      style={{ willChange: "transform" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="relative h-[2px] bg-[#E2E8F0] rounded-full overflow-visible"
          style={{ containerType: "inline-size" }}
        >
          {/* Filled bar */}
          <div
            ref={fillRef}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#C8530A]/60 via-[#C8530A] to-[#A8420A] rounded-full shadow-[0_0_12px_rgba(200,83,10,0.4)]"
            style={{ willChange: "width" }}
          />
          {/* India anchor */}
          <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand shadow-[0_0_8px_rgba(200,83,10,0.6)]" />
          {/* AU anchor */}
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#CBD5E1]" />

          {/* Mist halo */}
          <div
            ref={mistRef}
            className="absolute top-1/2 left-0 w-[120px] h-[28px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 70% 50%, rgba(200,83,10,0.25), rgba(200,83,10,0.08) 40%, transparent 70%)",
              filter: "blur(6px)",
              willChange: "transform, opacity",
              opacity: 0,
            }}
          />

          {/* Particles container */}
          <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

          {/* Ship */}
          <div
            ref={shipRef}
            className="absolute top-1/2 left-0"
            style={{ willChange: "transform", transform: "translate3d(-14px, -50%, 0)" }}
          >
            <div className="relative">
              {/* Wake */}
              <div
                ref={wakeRef}
                className="absolute right-full top-1/2 -translate-y-1/2 h-px bg-gradient-to-l from-[#C8530A] via-[#C8530A]/60 to-transparent"
                style={{ willChange: "width, opacity" }}
              />
              <svg width="28" height="20" viewBox="0 0 28 20" className="text-brand drop-shadow-[0_0_6px_rgba(200,83,10,0.6)]" fill="currentColor">
                <path d="M2 14 L26 14 L23 18 L5 18 Z" />
                <rect x="9" y="7" width="11" height="6" />
                <rect x="13" y="3" width="3" height="5" />
                <rect x="17" y="5" width="2" height="3" fill="#0F172A" opacity="0.9" />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between mt-1.5 text-[9px] tracking-[0.25em] text-[#334155]/60 font-display">
          <span>INDIA</span>
          <span ref={nmRef} className="text-brand/90">0 NM</span>
          <span>AUSTRALIA</span>
        </div>
      </div>
    </div>
  );
}
