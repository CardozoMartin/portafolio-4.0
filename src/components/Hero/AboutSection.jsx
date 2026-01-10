import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const bentoCards = [
    {
      id: 1,
      title: "Sobre Mí",
      description: "Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. Estudiante de Tecnicatura en Programación en UTN FRT.",
      icon: "👨‍💻",
      gradient: "from-blue-500/20 to-purple-500/20",
      size: "md:col-span-2 md:row-span-2"
    },
    {
      id: 2,
      title: "Ubicación",
      description: "Tucumán, Argentina 🇦🇷",
      icon: "📍",
      gradient: "from-green-500/20 to-teal-500/20",
      size: "md:col-span-1"
    },
    {
      id: 3,
      title: "Experiencia",
      description: "3+ años desarrollando soluciones web y móviles",
      icon: "⚡",
      gradient: "from-yellow-500/20 to-orange-500/20",
      size: "md:col-span-1"
    },
    {
      id: 4,
      title: "Stack Principal",
      description: "React • Node.js • TypeScript • MongoDB • Express",
      icon: "🚀",
      gradient: "from-pink-500/20 to-rose-500/20",
      size: "md:col-span-2"
    },
    {
      id: 5,
      title: "Enfoque",
      description: "Clean Code, UI/UX, Performance",
      icon: "✨",
      gradient: "from-indigo-500/20 to-blue-500/20",
      size: "md:col-span-1"
    },
    {
      id: 6,
      title: "Disponibilidad",
      description: "Abierto a nuevos proyectos",
      icon: "💡",
      gradient: "from-purple-500/20 to-pink-500/20",
      size: "md:col-span-1"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        stiffness: 100
      }
    }
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Conóceme Mejor
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Un vistazo a mi mundo de desarrollo y creatividad
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]"
        >
          {bentoCards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`
                ${card.size}
                group relative overflow-hidden rounded-2xl
                bg-gradient-to-br ${card.gradient}
                border border-white/10
                backdrop-blur-sm
                p-6
                cursor-pointer
                transition-all duration-300
              `}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" 
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 2px 2px, white 1px, transparent 0)
                    `,
                    backgroundSize: '24px 24px'
                  }}
                />
              </div>

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white/5 blur-xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { label: "Proyectos", value: "15+", icon: "🎯" },
            { label: "Tecnologías", value: "20+", icon: "🛠️" },
            { label: "Clientes", value: "10+", icon: "🤝" },
            { label: "Café", value: "∞", icon: "☕" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;