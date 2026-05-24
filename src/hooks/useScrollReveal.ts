import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const els = document.querySelectorAll(
      ".reveal, .reveal-from-right, .reveal-from-left, .reveal-line"
    );
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
