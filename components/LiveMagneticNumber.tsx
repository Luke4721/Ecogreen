'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface LiveMagneticNumberProps {
  baseValue: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export default function LiveMagneticNumber({ baseValue, label, prefix = '', suffix = '' }: LiveMagneticNumberProps) {
  const [currentValue, setCurrentValue] = useState(baseValue);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue(prev => prev + (Math.random() * 0.5));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const intPart = Math.floor(currentValue);
  const decPart = (currentValue - intPart).toFixed(2).substring(1);

  const formattedInt = new Intl.NumberFormat('en-US').format(intPart);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="flex flex-col items-center justify-center p-8 rounded-3xl cursor-default"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', duration: 1.5 } }
      }}
    >
      <div style={{ transform: "translateZ(50px)" }} className="flex flex-col items-center">
        <h3 className="text-6xl md:text-8xl font-black text-slate-900 mb-2 font-mono tracking-tight flex items-baseline">
          {prefix}{formattedInt}
          <span className="text-2xl md:text-4xl text-green-500 font-mono opacity-80">{decPart}</span>
          <span className="text-green-500 text-4xl md:text-6xl ml-1">{suffix}</span>
        </h3>
        <p style={{ transform: "translateZ(30px)" }} className="text-sm md:text-base font-bold text-slate-500 uppercase tracking-[0.2em] text-center mt-2">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
