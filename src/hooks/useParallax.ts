import { useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number; // e.g. 0.08 for subtle movement (~15-25px over full viewport traversal)
  maxOffset?: number; // clamp maximum shift in pixels (default 24px)
  direction?: 'up' | 'down';
}

/**
 * useParallax
 * High-performance, zero-React-re-render scroll parallax hook.
 * Uses requestAnimationFrame batching, IntersectionObserver liveness gating,
 * direct GPU transform writes (translate3d), and respects prefers-reduced-motion.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>({
  speed = 0.06,
  maxOffset = 22,
  direction = 'down',
}: ParallaxOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's accessibility motion settings
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Disable continuous parallax on small/mobile screens to preserve battery & high FPS
    if (window.innerWidth < 768) {
      return;
    }

    let isVisible = false;
    let ticking = false;

    const updateTransform = () => {
      if (!el || !isVisible) {
        ticking = false;
        return;
      }

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress relative to viewport center: -1 at bottom, 0 at center, +1 at top
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = (viewportHeight / 2) - elementCenter;

      let offset = distanceFromCenter * speed;
      if (direction === 'up') offset = -offset;

      // Clamp offset to avoid escaping parent containers
      const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, offset));

      el.style.transform = `translate3d(0, ${clampedOffset.toFixed(2)}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking && isVisible) {
        window.requestAnimationFrame(updateTransform);
        ticking = true;
      }
    };

    // Only compute transforms when element is actually within viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          updateTransform();
        }
      },
      { rootMargin: '100px 0px 100px 0px' }
    );

    observer.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial positioning
    updateTransform();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (el) {
        el.style.transform = '';
      }
    };
  }, [speed, maxOffset, direction]);

  return ref;
}
