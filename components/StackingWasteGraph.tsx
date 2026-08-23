'use client';
import React, { useEffect, useRef } from 'react';

interface Block {
  x: number;
  y: number;
  w: number;
  h: number;
  targetY: number;
  speed: number;
  color: string;
}

export default function StackingWasteGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let blocks: Block[] = [];
    
    // Column configuration
    const colCount = 40;
    const heights = new Array(colCount).fill(0);
    
    const colors = ['#10b981', '#059669', '#34d399', '#6ee7b7'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 400;
    };
    window.addEventListener('resize', resize);
    resize();

    const addBlock = () => {
      const colWidth = canvas.width / colCount;
      const colIndex = Math.floor(Math.random() * colCount);
      const w = colWidth * 0.8;
      const x = colIndex * colWidth + (colWidth * 0.1);
      const h = Math.random() * 15 + 5;
      
      // Calculate where it should stop (stacking)
      const currentStackHeight = heights[colIndex];
      const targetY = canvas.height - currentStackHeight - h;
      
      blocks.push({
        x,
        y: -20,
        w,
        h,
        targetY,
        speed: Math.random() * 5 + 3,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
      
      // Update the column's total height
      heights[colIndex] += h + 2; // +2 for gap
      
      // Reset if it gets too high to keep the animation going indefinitely
      if (heights[colIndex] > canvas.height * 0.8) {
        heights[colIndex] = 0;
        // Also remove blocks from this column to avoid memory leaks
        blocks = blocks.filter(b => b.x !== x || b.y < 0);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add a new block occasionally
      if (Math.random() < 0.3) {
        addBlock();
      }

      for (let i = 0; i < blocks.length; i++) {
        const b = blocks[i];
        
        // Fall down
        if (b.y < b.targetY) {
          b.y += b.speed;
        } else {
          b.y = b.targetY; // Lock in place
        }

        ctx.fillStyle = b.color;
        
        // Draw slightly rounded rect
        ctx.beginPath();
        ctx.roundRect(b.x, b.y, b.w, b.h, 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Fade out top so blocks fade in smoothly */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-transparent"></div>
    </div>
  );
}
