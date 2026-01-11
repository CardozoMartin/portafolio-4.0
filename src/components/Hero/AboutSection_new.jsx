import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const bentoCards = [
    // Card 1: Ubicación con mapa animado
    {
      id: 1,
      content: (
        <div className="h-full relative overflow-hidden">
          {/* Mapa con línea de conexión animada */}
          <motion.div 
            className="absolute inset-0"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg viewBox="0 0 200 100" className="w-full h-full">
              <motion.line 
                x1="40" y1="50" x2="160" y2="50" 
                stroke="#10b981" 
                strokeWidth="2" 
                strokeDasharray="5 5"
                animate={{ strokeDashoffset: [0, -10] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <circle cx="40" cy="50" r="4" fill="#f59e0b" />
              <circle cx="160" cy="50" r="4" fill="#10b981" />
            </svg>
          </motion.div>
          
          <div className="relative z-10 p-4">
            <div className="text-4xl mb-2">📍</div>
            <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Ubicado en</p>
            <h3 className="text-white font-bold text-2xl mb-1">Tucumán, Argentina</h3>
            <p className="text-emerald-400 text-xs font-mono">
              <span className="text-orange-400">→</span> ~8,087km away from your current location
            </p>
          </div>
          
          <div className="absolute top-2 right-2 bg-slate-800/80 backdrop-blur-sm rounded-lg px-2 py-1">
            <span className="text-xs font-mono text-emerald-400">GMT-3</span>
          </div>
        </div>
      ),
      className: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700",
      size: "md:col-span-2 md:row-span-1"
    },

    // Card 2: Terminal animado
    {
      id: 2,
      content: (
        <div className="h-full relative">
          <div className="bg-black/50 rounded-lg p-3 h-full border border-emerald-500/30">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-white/40 font-mono text-[10px]">terminal</span>
            </div>
            <div className="font-mono text-[11px] space-y-1">
              <div className="text-emerald-400">
                <span className="text-white/50">$</span> node --version
              </div>
              <div className="text-white/60 pl-2">v20.11.0</div>
              <div className="text-emerald-400 mt-2">
                <span className="text-white/50">$</span> npm start
              </div>
              <div className="text-cyan-400 pl-2">
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ⚡ Server running...
                </motion.span>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-2 -right-2 bg-emerald-600 border-2 border-emerald-500 rounded-lg p-1.5 shadow-lg">
            <span className="text-lg">⬢</span>
          </div>
        </div>
      ),
      className: "bg-gradient-to-br from-emerald-950/50 to-green-900/30 border-emerald-700/50",
      size: "md:col-span-1 md:row-span-2"
    },

    // Card 3: Experiencia con años
    {
      id: 3,
      content: (
        <div className="h-full flex flex-col items-center justify-center relative">
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <div className="text-[120px] text-center">💼</div>
          </motion.div>
          
          <div className="relative z-10 text-center">
            <motion.div
              className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1"
              whileHover={{ scale: 1.1 }}
            >
              3+
            </motion.div>
            <p className="text-white/80 text-sm font-semibold">Years of</p>
            <p className="text-white/80 text-sm font-semibold">Experience</p>
          </div>
          
          <div className="absolute -bottom-2 -right-2 bg-purple-600 border-2 border-purple-500 rounded-lg p-1.5 shadow-lg">
            <span className="text-lg">📊</span>
          </div>
        </div>
      ),
      className: "bg-gradient-to-br from-purple-950/50 to-pink-900/30 border-purple-700/50",
      size: "md:col-span-1 md:row-span-1"
    },

    // Card 4: Stack tecnológico con animación
    {
      id: 4,
      content: (
        <div className="h-full p-4">
          <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
            <span>🛠️</span> Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Node.js', emoji: '⬢', color: 'bg-green-500/20 border-green-500/40' },
              { name: 'Express', emoji: '⚡', color: 'bg-gray-500/20 border-gray-500/40' },
              { name: 'MongoDB', emoji: '🍃', color: 'bg-green-600/20 border-green-600/40' },
              { name: 'PostgreSQL', emoji: '🐘', color: 'bg-blue-500/20 border-blue-500/40' },
              { name: 'Docker', emoji: '🐳', color: 'bg-blue-400/20 border-blue-400/40' },
              { name: 'Redis', emoji: '⚙️', color: 'bg-red-500/20 border-red-500/40' },
            ].map((tech, idx) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`${tech.color} backdrop-blur-sm rounded-md px-2 py-1 border flex items-center gap-1.5`}
              >
                <span className="text-sm">{tech.emoji}</span>
                <span className="text-white/90 text-xs font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ),
      className: "bg-gradient-to-br from-blue-950/50 to-indigo-900/30 border-blue-700/50",
      size: "md:col-span-2 md:row-span-1"
    },

    // Card 5: Disponibilidad con animación
    {
      id: 5,
      content: (
        <div className="h-full flex flex-col justify-center p-4">
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-400 font-mono text-xs uppercase tracking-wider">Available</span>
          </div>
          <h4 className="text-white font-bold text-lg mb-1">Open to Work</h4>
          <p className="text-white/60 text-xs leading-relaxed">
            Ready for new backend challenges and collaborations
          </p>
          
          <div className="absolute -top-2 -left-2 bg-green-600 border-2 border-green-500 rounded-lg p-1.5 shadow-lg">
            <span className="text-lg">💚</span>
          </div>
        </div>
      ),
      className: "bg-gradient-to-br from-green-950/50 to-emerald-900/30 border-green-700/50",
      size: "md:col-span-1 md:row-span-1"
    },

    // Card 6: Estadística de APIs
    {
      id: 6,
      content: (
        <div className="h-full flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
              style={{
                background: 'conic-gradient(from 0deg, #0ea5e9 0%, transparent 50%, #0ea5e9 100%)'
              }}
            />
          </div>
          
          <div className="relative z-10 text-center">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
              25+
            </div>
            <p className="text-white/70 text-xs">APIs Built</p>
            <div className="text-2xl mt-2">🔌</div>
          </div>
          
          <div className="absolute -bottom-2 -left-2 bg-cyan-600 border-2 border-cyan-500 rounded-lg p-1.5 shadow-lg">
            <span className="text-lg">⚡</span>
          </div>
        </div>
      ),
      className: "bg-gradient-to-br from-cyan-950/50 to-blue-900/30 border-cyan-700/50",
      size: "md:col-span-1 md:row-span-1"
    },

    // Card 7: Sobre mí con foto placeholder
    {
      id: 7,
      content: (
        <div className="h-full p-4 flex flex-col">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl flex-shrink-0">
              👨‍💻
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold text-base mb-1">Martin Cardozo</h4>
              <p className="text-emerald-400 text-xs font-mono">Backend Developer</p>
            </div>
          </div>
          
          <p className="text-white/70 text-xs leading-relaxed flex-1">
            Apasionado por construir APIs escalables y sistemas robustos. 
            Me enfoco en arquitectura limpia y buenas prácticas.
          </p>
          
          <div className="flex gap-2 mt-2">
            <span className="text-xs text-white/50">📚 UTN FRT</span>
          </div>
        </div>
      ),
      className: "bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700",
      size: "md:col-span-2 md:row-span-1"
    },

    // Card 8: Herramientas Grid
    {
      id: 8,
      content: (
        <div className="h-full flex items-center justify-center p-3">
          <div className="grid grid-cols-3 gap-3">
            {['🐳', '⚙️', '🔥', '💾', '🔐', '📦'].map((icon, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-10 h-10 flex items-center justify-center text-2xl bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer"
              >
                {icon}
              </motion.div>
            ))}
          </div>
          
          <div className="absolute -top-2 -right-2 bg-indigo-600 border-2 border-indigo-500 rounded-lg p-1.5 shadow-lg">
            <span className="text-lg">🛠️</span>
          </div>
        </div>
      ),
      className: "bg-gradient-to-br from-indigo-950/50 to-purple-900/30 border-indigo-700/50",
      size: "md:col-span-1 md:row-span-1"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 px-4 bg-gradient-to-b from-[#0f172a] via-[#020617] to-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            About Me
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            Un vistazo a mi mundo como Backend Developer
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[180px]"
        >
          {bentoCards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`
                ${card.size}
                ${card.className}
                relative overflow-visible rounded-xl
                border-2
                backdrop-blur-sm
                transition-all duration-300
                hover:shadow-2xl hover:shadow-emerald-500/10
                cursor-pointer
              `}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full z-10">
                {card.content}
              </div>
              
              {/* Hover glow effect */}
              {hoveredCard === card.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-xl pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6"
        >
          {[
            { label: "Uptime", value: "99.9%", icon: "⚡", color: "from-green-500/10 to-emerald-500/10 border-green-500/20" },
            { label: "Tech", value: "20+", icon: "🛠️", color: "from-purple-500/10 to-pink-500/10 border-purple-500/20" },
            { label: "Commits", value: "1k+", icon: "💻", color: "from-orange-500/10 to-yellow-500/10 border-orange-500/20" },
            { label: "Coffee", value: "∞", icon: "☕", color: "from-amber-500/10 to-orange-500/10 border-amber-500/20" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3, scale: 1.02 }}
              className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-lg p-4 border text-center relative overflow-hidden group cursor-pointer`}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl md:text-2xl font-bold text-white mb-0.5">{stat.value}</div>
              <div className="text-white/60 text-xs">{stat.label}</div>
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 group-hover:from-emerald-500/5 to-transparent transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
