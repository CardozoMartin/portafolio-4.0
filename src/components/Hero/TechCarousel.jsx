import React from 'react';
import { motion } from 'framer-motion';

const TechCarousel = () => {
  const technologies = [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Express', icon: '🚂' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'HTML', icon: '📄' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Tailwind', icon: '🌊' },
    { name: 'Zustand', icon: '📦' },
    { name: 'TanStack Query', icon: '⚙️' },
    { name: 'Supabase', icon: '🔥' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'N8N', icon: '🤖' },
    { name: 'MercadoPago', icon: '💳' },
    { name: 'React Native', icon: '⚛️' },
    { name: 'Postman', icon: '📮' },
  ];

  // Duplicamos las tecnologías para el efecto infinito
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <div className="relative w-full py-8">
      <div className="text-emerald-400/70 text-sm font-mono uppercase tracking-wider mb-8 text-center">
        Backend Stack
      </div>

      {/* Contenedor con overflow hidden */}
      <div className="overflow-hidden">
        {/* Carrusel */}
        <motion.div
          className="flex gap-6 sm:gap-8 md:gap-12"
          animate={{
            x: [0, -100 * technologies.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-2 w-16 sm:w-20 md:w-24"
            >
              <motion.div
                className="text-4xl sm:text-5xl md:text-6xl filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.0, filter: "grayscale(0%)" }}
                title={tech.name}
              >
                {tech.icon}
              </motion.div>
              <span className="text-emerald-400/60 text-xs font-mono hidden sm:block">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechCarousel;