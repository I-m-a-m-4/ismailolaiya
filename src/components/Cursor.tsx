'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 20;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const manageMouseOver = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.closest('a') ||
      target.closest('button')
    ) {
      setIsHovered(true);
    }
  };

  const manageMouseLeave = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
     if (
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.closest('a') ||
      target.closest('button')
    ) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    document.body.addEventListener('mouseover', manageMouseOver);
    document.body.addEventListener('mouseout', manageMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      document.body.removeEventListener('mouseover', manageMouseOver);
      document.body.removeEventListener('mouseout', manageMouseLeave);
    };
  }, [cursorSize]);

  return (
    <div className="hidden md:block">
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          width: cursorSize,
          height: cursorSize,
        }}
        className="fixed z-[9999] pointer-events-none"
      >
        <motion.div
          className={cn(
            "absolute w-full h-full rounded-full border-2 transition-colors",
            isHovered ? 'border-primary/50' : 'border-primary'
          )}
          animate={{ scale: isHovered ? 1 : 1.2, opacity: isHovered ? 0 : 1 }}
        />
        <motion.div
          className="absolute w-full h-full rounded-full bg-primary"
          animate={{ scale: isHovered ? 1.2 : 0, opacity: isHovered ? 0.2 : 0 }}
        />
      </motion.div>
    </div>
  );
};

export default Cursor;
