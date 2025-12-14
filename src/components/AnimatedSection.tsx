"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  delay = 0,
  threshold = 0.1,
  className = "",
}: AnimatedSectionProps) {
  const anim = useScrollAnimation({ threshold, delay });

  return (
    <div
      ref={anim.ref}
      className={`transition-opacity duration-700 ${
        anim.isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
      } ${className}`}
      style={{
        willChange: anim.isVisible ? 'auto' : 'transform, opacity',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      {children}
    </div>
  );
}

