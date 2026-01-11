import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const FeaturedProjectCard = ({ project, index }) => {
  const {
    id,
    image,
    title,
    shortDescription,
    description,
    githubUrl,
    link,
    technologies = [],
    features = [],
    status
  } = project;

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`group relative bg-gradient-to-br from-[#1e293b]/50 via-[#0f172a]/50 to-[#020617]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-500 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } flex flex-col lg:min-h-[500px]`}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image Section */}
      <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent lg:bg-gradient-to-r" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md border ${
            status === 'Completado' 
              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
              : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
          }`}>
            {status}
          </span>
        </div>

        {/* Quick Actions - Mobile */}
        <div className="absolute bottom-4 right-4 flex gap-2 lg:hidden">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-emerald-500/20 backdrop-blur-md rounded-full hover:bg-emerald-500/30 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-emerald-400" />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
        {/* Header */}
        <div className="space-y-4">
          {/* Project Number */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="text-emerald-400/50 font-mono text-sm font-bold">
              {String(index + 1).padStart(2, '0')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight"
          >
            {title}
          </motion.h3>

          {/* Short Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-emerald-400/80 text-sm sm:text-base font-medium"
          >
            {shortDescription}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/70 text-sm sm:text-base leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Features - Todas las características */}
          {features && features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-2 pt-2"
            >
              <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                Características Principales
              </h4>
              <ul className="space-y-1.5">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white/60 text-sm">
                    <span className="text-emerald-400 mt-1">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="space-y-4 mt-6">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-2"
          >
            {technologies.slice(0, 6).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-white/5 backdrop-blur-sm text-white/80 text-xs font-medium rounded-lg border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 6 && (
              <span className="px-3 py-1.5 bg-white/5 backdrop-blur-sm text-white/60 text-xs font-medium rounded-lg border border-white/10">
                +{technologies.length - 6}
              </span>
            )}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            {/* Ver Detalles */}
            <Link
              to={`/projectDetail/${id}`}
              className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              <span>Ver Detalles</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>

            {/* GitHub - Desktop */}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                <Github className="w-4 h-4" />
                <span>Código</span>
              </a>
            )}

            {/* Live Demo - Desktop */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo</span>
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />
    </motion.div>
  );
};

export default FeaturedProjectCard;
