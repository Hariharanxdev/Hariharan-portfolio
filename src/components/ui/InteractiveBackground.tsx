import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function InteractiveBackground() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Mouse position with smooth spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Main gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Animated gradient orbs that follow mouse */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(210 100% 55% / 0.25) 0%, hsl(185 100% 50% / 0.1) 40%, transparent 70%)',
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{ duration: 0.4 }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(280 70% 60% / 0.2) 0%, hsl(320 80% 55% / 0.1) 40%, transparent 70%)',
          x: smoothX,
          y: smoothY,
          translateX: '-25%',
          translateY: '-25%',
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
        }}
        transition={{ duration: 0.5, delay: 0.05 }}
      />
      
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(175 80% 45% / 0.25) 0%, hsl(150 70% 50% / 0.1) 40%, transparent 70%)',
          x: smoothX,
          y: smoothY,
          translateX: '-75%',
          translateY: '-75%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.6, delay: 0.1 }}
      />


      {/* Large floating ambient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(210 100% 55% / 0.15) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(320 80% 55% / 0.12) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-[280px] h-[280px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(175 80% 45% / 0.12) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -70, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Animated gradient lines */}
      <motion.div
        className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleY: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-secondary/10 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scaleY: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(210 100% 55%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, hsl(210 100% 55% / 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, hsl(185 100% 50% / 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, hsl(175 80% 45% / 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, hsl(280 70% 60% / 0.1) 75%)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Noise texture overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
