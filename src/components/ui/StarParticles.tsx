import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  angle: number;
  length: number;
  duration: number;
  delay: number;
  repeatDelay: number;
}

// Initialize stars and shooting stars on module load for immediate rendering
const getInitialStars = (): Star[] => {
  const newStars: Star[] = [];
  for (let i = 0; i < 80; i++) {
    newStars.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    });
  }
  return newStars;
};

const getInitialShootingStars = (): ShootingStar[] => [
  { id: 1, startX: 85, startY: 5, angle: 35, length: 80, duration: 1.5, delay: 0, repeatDelay: 7 },
  { id: 2, startX: 25, startY: 10, angle: 50, length: 60, duration: 1.2, delay: 3, repeatDelay: 10 },
  { id: 3, startX: 60, startY: 8, angle: 40, length: 70, duration: 1.8, delay: 6, repeatDelay: 12 },
  { id: 4, startX: 45, startY: 3, angle: 55, length: 50, duration: 1.0, delay: 9, repeatDelay: 8 },
  { id: 5, startX: 75, startY: 15, angle: 30, length: 90, duration: 2.0, delay: 12, repeatDelay: 15 },
  { id: 6, startX: 15, startY: 5, angle: 45, length: 65, duration: 1.4, delay: 4, repeatDelay: 11 },
  { id: 7, startX: 90, startY: 12, angle: 60, length: 55, duration: 1.1, delay: 8, repeatDelay: 9 },
  { id: 8, startX: 50, startY: 2, angle: 38, length: 85, duration: 1.7, delay: 15, repeatDelay: 13 },
];

export function StarParticles() {
  const [stars, setStars] = useState<Star[]>(getInitialStars());
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>(getInitialShootingStars());

  useEffect(() => {
    // Regenerate stars on component mount to ensure fresh random values each session
    setStars(getInitialStars());
    setShootingStars(getInitialShootingStars());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-foreground/30"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Dynamic shooting stars */}
      {shootingStars.map((shooting) => {
        const radians = (shooting.angle * Math.PI) / 180;
        const travelX = Math.cos(radians) * 300;
        const travelY = Math.sin(radians) * 300;
        
        return (
          <motion.div
            key={shooting.id}
            className="absolute bg-gradient-to-b from-foreground/50 via-foreground/20 to-transparent"
            style={{ 
              left: `${shooting.startX}%`, 
              top: `${shooting.startY}%`, 
              rotate: shooting.angle,
              width: '1px',
              height: `${shooting.length}px`,
            }}
            animate={{
              x: [-50, travelX],
              y: [-25, travelY],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: shooting.duration,
              repeat: Infinity,
              repeatDelay: shooting.repeatDelay,
              delay: shooting.delay,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}
