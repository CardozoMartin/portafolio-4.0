import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bahia from '../../assets/img/bahia.png';
import botimg from '../../assets/img/botimg.jpg';
import gym from '../../assets/img/gym.jpg';
import petqr from '../../assets/img/petqr.jpg';
import ventas from '../../assets/img/ventas.jpg';
import distrinort from '../../assets/img/distrinort.png';
import eco1 from '../../assets/img/ecoRed.png';

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [filter, setFilter] = useState('all');

  // Configuración de proyectos con tamaños variables
  const projects = [
    {
      id: 1,
      image: bahia,
      title: "E-commerce Joyería Plataforma",
      shortDescription: "Plataforma completa de comercio electrónico con integración de Mercado Pago",
      category: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB", "MercadoPago"],
      size: "large", // Proyecto destacado
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 2,
      image: distrinort,
      title: "DistriNort - Sistema de Gestión",
      shortDescription: "Sistema completo de gestión empresarial con múltiples módulos",
      category: "Sistema",
      technologies: ["React", "Express", "PostgreSQL"],
      size: "medium",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 3,
      image: petqr,
      title: "PetsQR - Gestión de Mascotas",
      shortDescription: "Plataforma para gestionar información de mascotas con códigos QR",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "QR"],
      size: "small",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 4,
      image: gym,
      title: "Sistema de Gestión Gym",
      shortDescription: "Aplicación para gestionar membresías y rutinas de gimnasio",
      category: "Sistema",
      technologies: ["React", "Node.js", "MongoDB"],
      size: "medium",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 5,
      image: ventas,
      title: "Sistema de Ventas",
      shortDescription: "Sistema completo de punto de venta y control de inventario",
      category: "Sistema",
      technologies: ["React", "Express", "MySQL"],
      size: "small",
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      id: 6,
      image: botimg,
      title: "Chatbot IA",
      shortDescription: "Bot conversacional con inteligencia artificial",
      category: "IA",
      technologies: ["Python", "OpenAI", "Flask"],
      size: "small",
      color: "from-yellow-500/20 to-amber-500/20"
    },
    {
      id: 7,
      image: eco1,
      title: "EcoRed Platform",
      shortDescription: "Plataforma de gestión ambiental y sostenibilidad",
      category: "Web",
      technologies: ["React", "Node.js", "MongoDB"],
      size: "large",
      color: "from-teal-500/20 to-green-500/20"
    }
  ];

  const categories = ['all', 'E-commerce', 'Sistema', 'Mobile', 'IA', 'Web'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getSizeClass = (size) => {
    switch(size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2 md:row-span-1';
      case 'small':
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Mis <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Una colección de proyectos que muestran mi pasión por el desarrollo
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300
                ${filter === category 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }
              `}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Masonry Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              className={`
                ${getSizeClass(project.size)}
                group relative overflow-hidden rounded-2xl
                cursor-pointer
              `}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ scale: 1.02, zIndex: 10 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className={`
                  absolute inset-0 
                  bg-gradient-to-br ${project.color}
                  opacity-60 group-hover:opacity-40
                  transition-opacity duration-300
                `} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0, y: hoveredId === project.id ? 0 : -10 }}
                  className="absolute top-4 left-4"
                >
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/20">
                    {project.category}
                  </span>
                </motion.div>

                {/* Title */}
                <h3 className="text-white font-bold text-xl md:text-2xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-white/70 text-xs border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-white/70 text-xs border border-white/20">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button - appears on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredId === project.id ? 1 : 0,
                    y: hoveredId === project.id ? 0 : 10
                  }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to={`/projectDetail/${project.id}`}
                    state={{ project }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 group/btn"
                  >
                    Ver Proyecto
                    <svg 
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">¿Quieres ver más detalles de mis proyectos?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
