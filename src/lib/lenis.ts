import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

export function scrollToElement(id: string, offset = 0) {
  const el = document.getElementById(id);
  if (!el) return;
  lenis.scrollTo(el, { offset });
}

export function scrollToTop() {
  lenis.scrollTo(0);
}
