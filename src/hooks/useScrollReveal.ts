import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fades + slides in the elements matching `selector` inside the returned ref,
 * once, when the container scrolls into view. Falls back to doing nothing
 * (elements stay visible) if the container or targets aren't found.
 */
export function useScrollReveal<T extends HTMLElement>(selector: string, stagger = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll(selector);
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [selector, stagger]);

  return ref;
}
