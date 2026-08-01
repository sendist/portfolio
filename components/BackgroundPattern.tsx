"use client";

import { motion } from "framer-motion";

export default function BackgroundPattern() {
  return (
    <div className="absolute overflow-hidden inset-0 z-[-1] h-full w-full bg-[#111111]">
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      
      {/* Radial Gradient Mask to make it fade nicely */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#333333] opacity-20 blur-[100px]" />
      
      {/* A slow-moving geometric orb using Framer Motion */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-900/10 blur-[120px]"
      />
    </div>
  );
}
