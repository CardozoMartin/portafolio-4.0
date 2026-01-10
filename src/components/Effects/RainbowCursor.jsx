import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RainbowCursor = () => {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const colors = [
    '#FF6B6B', // Rojo
    '#FF8E53', // Naranja
    '#FEC84B', // Amarillo
    '#4ECDC4', // Verde azulado
    '#45B7D1', // Azul claro
    '#5E60CE', // Azul violeta
    '#A78BFA', // Violeta
    '#EC4899', // Rosa
  ];

  useEffect(() => {
    let lastTime = Date.now();
    let particleId = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      const timeSinceLastParticle = now - lastTime;

      setMousePosition({ x: e.clientX, y: e.clientY });

      // Crear nueva partícula cada 30ms
      if (timeSinceLastParticle > 30) {
        const newParticle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 6,
        };

        setParticles((prev) => [...prev.slice(-50), newParticle]);
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ 
              scale: 0,
              opacity: 0,
              y: particle.y - 50,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut" 
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RainbowCursor;
