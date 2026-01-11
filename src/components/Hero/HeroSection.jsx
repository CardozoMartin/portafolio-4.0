import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarField from '../Effects/StarField';
import TechCarousel from './TechCarousel';

const BackendHero = () => {
  const [typedText, setTypedText] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Código flotante en el fondo - reducido para mobile
  const codeSnippets = [
    'const server = express();',
    'app.listen(3000);',
    'mongoose.connect(URI);',
    'async/await',
    'JWT.sign(payload);',
    'bcrypt.hash(password);',
  ];

  // Efecto de tipeo
  const fullText = 'node server.js';
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b]"
      style={{ cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'48\' viewBox=\'0 0 40 48\'><text y=\'32\' font-size=\'32\'>🚀</text></svg>") 16 0, auto' }}
    >
      
      {/* Fondo con estrellas y efectos */}
      <div className="absolute inset-0">
        {/* Gradiente profundo con múltiples capas */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-blue-950/30" />
        
        {/* Animación de estrellas - deshabilitada en mobile */}
        {!isMobile && <StarField />}
        
        {/* Líneas de código flotantes - solo en desktop */}
        {!isMobile && codeSnippets.map((code, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-500/10 font-mono text-sm md:text-base whitespace-nowrap"
            style={{
              left: `${(i * 15) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{
              x: [0, -100, 0],
              y: [0, Math.sin(i) * 50, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {code}
          </motion.div>
        ))}

        {/* Grid tecnológico con efecto de respiración - más simple en mobile */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: isMobile ? [0.05, 0.1, 0.05] : [0, 0.2, 0],
          }}
          transition={{
            duration: isMobile ? 8 : 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #10b981 1px, transparent 1px),
                linear-gradient(to bottom, #10b981 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </motion.div>

        {/* Orbes de luz - simplificados en mobile */}
        <motion.div
          className={`absolute top-1/4 left-1/4 ${isMobile ? 'w-[200px] h-[200px]' : 'w-[500px] h-[500px]'} rounded-full blur-3xl`}
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
          }}
          animate={isMobile ? {
            opacity: [0.2, 0.4, 0.2],
          } : {
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: isMobile ? 10 : 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className={`absolute bottom-1/4 right-1/4 ${isMobile ? 'w-[200px] h-[200px]' : 'w-[500px] h-[500px]'} rounded-full blur-3xl`}
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
          }}
          animate={isMobile ? {
            opacity: [0.2, 0.3, 0.2],
          } : {
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: isMobile ? 12 : 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {!isMobile && (
          <motion.div
            className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          
          {/* Terminal Badge */}
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-black/40 border border-emerald-500/30 backdrop-blur-md mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex gap-1 sm:gap-1.5">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full" />
            </div>
            <span className="text-xs sm:text-sm text-emerald-400 font-mono">
              $ {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                _
              </motion.span>
            </span>
          </motion.div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight px-2">
            <motion.span
              className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Cardozo Martin
            </motion.span>
            <motion.span
              className="block text-white mt-1 sm:mt-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Tec. en Programacion
            </motion.span>
          </h1>

          {/* Subtítulo con estilo mejorado */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-lg sm:text-2xl md:text-3xl font-italic text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text mb-3">
              <span className="italic">"Si puedes imaginarlo, puedes programarlo"</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Transformo ideas en soluciones digitales reales
            </p>
          </motion.div>

          {/* Botones CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.button
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-black font-bold overflow-hidden transition-colors w-full sm:w-auto max-w-xs sm:max-w-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Ver APIs
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </motion.button>

            <motion.button
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-500/50 hover:border-emerald-500 rounded-lg text-white font-semibold transition-all backdrop-blur-sm hover:bg-emerald-500/10 w-full sm:w-auto max-w-xs sm:max-w-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar
            </motion.button>
          </motion.div>

          {/* Stack Tecnológico - Carrusel */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16 overflow-hidden -mx-4 sm:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <TechCarousel />
          </motion.div>

        </motion.div>
      </div>

      {/* Indicador de Scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-emerald-400/60 text-xs font-mono">scroll</span>
          <div className="w-6 h-10 border-2 border-emerald-500/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-emerald-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default BackendHero;