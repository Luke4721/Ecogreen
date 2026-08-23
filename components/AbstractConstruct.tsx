'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, HardDrive, Zap, Battery, BatteryCharging, Droplets, Leaf, Recycle, Factory, Layers, Boxes } from 'lucide-react';

export default function AbstractConstruct({ type }: { type: string }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const float = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, bounce: 0.5 }
    }
  };

  if (type === 'ewaste') {
    return (
      <motion.div variants={container} initial="hidden" animate="show" className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute text-green-200/50">
          <Server size={180} strokeWidth={1} />
        </motion.div>
        <motion.div variants={float} animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute z-10 text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
          <Cpu size={100} strokeWidth={1.5} />
        </motion.div>
        <motion.div variants={float} className="absolute -bottom-10 -right-10 text-teal-400">
          <HardDrive size={80} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    );
  }

  if (type === 'battery') {
    return (
      <motion.div variants={container} initial="hidden" animate="show" className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute text-blue-200/50">
          <Zap size={220} strokeWidth={0.5} />
        </motion.div>
        <motion.div variants={float} animate={{ y: [-15, 15, -15] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute z-10 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <Battery size={110} strokeWidth={1.5} />
        </motion.div>
        <motion.div variants={float} className="absolute -top-10 -left-5 text-indigo-400">
          <BatteryCharging size={60} strokeWidth={2} />
        </motion.div>
      </motion.div>
    );
  }

  if (type === 'plastic') {
    return (
      <motion.div variants={container} initial="hidden" animate="show" className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute text-teal-200/50">
          <Recycle size={200} strokeWidth={0.5} />
        </motion.div>
        <motion.div variants={float} animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute z-10 text-teal-500 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]">
          <Droplets size={100} strokeWidth={1.5} />
        </motion.div>
        <motion.div variants={float} className="absolute -bottom-5 -left-10 text-green-400">
          <Leaf size={70} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    );
  }

  // metal
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute text-amber-200/50">
        <Layers size={190} strokeWidth={0.5} />
      </motion.div>
      <motion.div variants={float} animate={{ y: [-12, 12, -12] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute z-10 text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
        <Factory size={100} strokeWidth={1.5} />
      </motion.div>
      <motion.div variants={float} className="absolute -top-10 -right-5 text-yellow-500">
        <Boxes size={65} strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
}
