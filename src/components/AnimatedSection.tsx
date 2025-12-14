"use client";

import { ReactNode, useEffect, useState } from "react";
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
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (anim.isVisible) {
      // Mark animation as complete after it finishes
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 600); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [anim.isVisible]);

  return (
    <div
      ref={anim.ref}
      className={`${
        anim.isVisible 
          ? (animationComplete ? "opacity-100" : "opacity-100 animate-fade-in-up")
          : "opacity-0"
      } ${className}`}
      style={{
        willChange: anim.isVisible && !animationComplete ? 'transform, opacity' : 'auto',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: animationComplete ? 'translate3d(0, 0, 0)' : undefined,
        transition: animationComplete ? 'none' : undefined,
      }}
    >
      {children}
    </div>
  );
}

