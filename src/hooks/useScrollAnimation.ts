"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true,
    delay = 0,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Use a more generous rootMargin on mobile for better performance
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const adjustedRootMargin = isMobile ? "-50px" : rootMargin;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame for smoother animations on mobile
            requestAnimationFrame(() => {
              setTimeout(() => {
                setIsVisible(true);
                if (triggerOnce) {
                  observer.unobserve(entry.target);
                }
              }, delay);
            });
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: adjustedRootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return { ref: elementRef, isVisible };
}

