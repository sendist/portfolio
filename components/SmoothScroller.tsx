"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";

export default function SmoothScroller({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
    {reducedMotion ? children : <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, anchors: true }}>
      {children}
    </ReactLenis>}
    </MotionConfig>
  );
}
