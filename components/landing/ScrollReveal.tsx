"use client";

import { useEffect } from "react";

type ScrollRevealProps = {
  sectionClassName: string;
  heroClassName: string;
  revealClassName: string;
  visibleClassName: string;
};

export function ScrollReveal({
  sectionClassName,
  heroClassName,
  revealClassName,
  visibleClassName
}: ScrollRevealProps) {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(`.${sectionClassName}:not(.${heroClassName})`)
    );

    if (!sections.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sections.forEach((section) => section.classList.add(visibleClassName));
      return;
    }

    sections.forEach((section) => section.classList.add(revealClassName));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(visibleClassName);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [heroClassName, revealClassName, sectionClassName, visibleClassName]);

  return null;
}
