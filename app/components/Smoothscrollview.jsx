"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function Smoothscrollview() {
  useEffect(() => {
    // ---------------------------------------------------------
    // Disable Lenis on touch/mobile devices.
    // Mobile should use native scrolling for reliable
    // touch, menu, drawer and floating-button interactions.
    // ---------------------------------------------------------
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      return;
    }

    // ---------------------------------------------------------
    // Desktop smooth scrolling
    // ---------------------------------------------------------
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: false,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}

// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";

// export default function Smoothscrollview({ children }) {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       wheelMultiplier: 1,
//       touchMultiplier: 1,
//       autoRaf: true,
//     });

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return <>{children}</>;
// }