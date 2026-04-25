import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollMotion() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // expo.out — silky
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      lerp: 0.085,
    });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      // Parallax bg
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.4");
        gsap.to(el, {
          yPercent: speed * 40,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
        });
      });

      // Word-by-word reveal headline
      document.querySelectorAll<HTMLElement>("[data-reveal-words]").forEach((el) => {
        const spans = el.querySelectorAll("span > span, span");
        gsap.from(spans, {
          y: 60, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.08,
        });
      });

      // Generic reveals
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 50, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Per-section scrubbed fade/slide — perfectly synced with Lenis/ScrollTrigger loop
      document.querySelectorAll<HTMLElement>("section, [data-section]").forEach((el) => {
        // Entry: fade + slide up as the section enters viewport
        gsap.fromTo(
          el,
          { autoAlpha: 0.0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              end: "top 55%",
              scrub: 0.6,
            },
          }
        );
        // Exit: gently fade/lift as it leaves the top
        gsap.fromTo(
          el,
          { autoAlpha: 1, y: 0 },
          {
            autoAlpha: 0.35,
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "bottom 60%",
              end: "bottom 10%",
              scrub: 0.6,
            },
          }
        );
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
}
