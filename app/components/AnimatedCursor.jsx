"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const glowRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const follower = useRef({ x: 0, y: 0 });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Main cursor follows immediately
      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${e.clientX}px, ${e.clientY}px, 0)
          translate(-50%, -50%)
        `;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      const element = target.closest(
        "a, button, input, textarea, select, [data-cursor-hover]"
      );

      setHovering(!!element);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    let animationFrame;

    const animate = () => {
      // Smooth follower movement
      follower.current.x +=
        (mouse.current.x - follower.current.x) * 0.10;

      follower.current.y +=
        (mouse.current.y - follower.current.y) * 0.10;

      const x = follower.current.x;
      const y = follower.current.y;

      // Follower
      if (followerRef.current) {
        followerRef.current.style.transform = `
          translate3d(${x}px, ${y}px, 0)
          translate(-50%, -50%)
        `;
      }

      // Glow
      if (glowRef.current) {
        glowRef.current.style.transform = `
          translate3d(${x}px, ${y}px, 0)
          translate(-50%, -50%)
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* =========================
          MAIN CURSOR
      ========================= */}
      <div
        ref={cursorRef}
        className="
          pointer-events-none
          fixed left-0 top-0
          z-[99999]

          h-3 w-3
          rounded-full

          bg-[#0D3C59]

          shadow-[0_0_15px_rgba(13,60,89,0.8)]

          mix-blend-difference

          transition-transform
          duration-100
        "
      />

      {/* =========================
          FOLLOWER CURSOR
      ========================= */}
      <div
        ref={followerRef}
        className={`
          pointer-events-none
          fixed left-0 top-0
          z-[99998]

          rounded-full
          border-2

          ease-out

          transition-all
          duration-300

          ${
            hovering
              ? `
                h-16 w-16
                border-[#0D3C59]
                bg-[#0D3C59]/10
                scale-110
              `
              : `
                h-10 w-10
                border-[#0D3C59]/60
                bg-[#0D3C59]/5
                scale-100
              `
          }
        `}
      />

      {/* =========================
          CURSOR GLOW
      ========================= */}
      <div
        ref={glowRef}
        className="
          pointer-events-none
          fixed left-0 top-0
          z-[99997]

          h-24 w-24
          rounded-full

          bg-[#0D3C59]/10

          blur-2xl

          transition-all
          duration-500
        "
      />
    </>
  );
}