import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5800, suffix: "", big: "5,800 NM", label: "The Distance" },
  { value: 0, suffix: "", big: "India ↔ Australia", label: "The Corridor" },
  { value: 0, suffix: "", big: "FCL & LCL", label: "Sea & Air" },
  { value: 0, suffix: "", big: "End-to-End", label: "D2C & B2B" },
];

function Counter({ target }: { target: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val.toLocaleString()}</span>;
}

export function TrustBar() {
  return (
    <section className="relative bg-[#0F172A] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x divide-white/10">
        {stats.map((s, i) => (
          <div key={i} className="text-center px-4 relative">
            <div className="font-display text-3xl md:text-4xl text-brand tracking-wide">
              {i === 0 ? <><Counter target={5800} /> NM</> : s.big}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-[#94A3B8]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
