'use client';

import React, { useEffect, useRef } from 'react';

interface Comet {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
}

export const CometRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let comets: Comet[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Initialize Canvas Size
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Create a new comet
    const createComet = (): Comet => {
      return {
        x: Math.random() * width + 300, // Start slightly off-screen right
        y: Math.random() * -100,        // Start slightly off-screen top
        length: Math.random() * 80 + 20,
        speed: Math.random() * 10 + 4,
        opacity: Math.random() * 0.5 + 0.5,
        angle: Math.PI / 4 // 45 degree angle
      };
    };

    // Animation Loop
    const animate = () => {
      // Clear with a slight fade effect to create trails (optional, but clean)
      ctx.clearRect(0, 0, width, height);
      
      // Randomly spawn comets
      if (comets.length < 15 && Math.random() < 0.05) {
        comets.push(createComet());
      }

      // Draw and update comets
      comets.forEach((comet, index) => {
        // Move
        comet.x -= comet.speed;
        comet.y += comet.speed;

        // Draw Comet Body (Gradient Tail)
        const gradient = ctx.createLinearGradient(
          comet.x, 
          comet.y, 
          comet.x + comet.length, 
          comet.y - comet.length
        );
        gradient.addColorStop(0, `rgba(167, 139, 250, ${comet.opacity})`); // Purple Head
        gradient.addColorStop(1, 'rgba(167, 139, 250, 0)'); // Transparent Tail

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(comet.x + comet.length, comet.y - comet.length);
        ctx.stroke();

        // Draw Glowing Head
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${comet.opacity})`;
        ctx.arc(comet.x, comet.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Remove if out of bounds
        if (comet.x < -100 || comet.y > height + 100) {
          comets.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
    //   className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"
    className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};