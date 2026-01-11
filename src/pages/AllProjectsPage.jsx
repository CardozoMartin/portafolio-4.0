import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectsSection from '../components/Project/ProjectSection';

const AllProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
        >
          <svg 
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Volver al inicio</span>
        </Link>
      </div>

      {/* Projects Section con showAll=true */}
      <ProjectsSection showAll={true} />

      {/* Note about projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto px-4 pb-20"
      >
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-2">Nota sobre estos proyectos</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Estos proyectos representan mi trayectoria de aprendizaje y evolución como desarrollador. 
                Fueron creados durante diferentes etapas de mi formación y, aunque funcionales, 
                reflejan niveles anteriores de experiencia.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Actualmente, mis capacidades y estándares de código son significativamente más altos. 
                Los incluyo aquí como testimonio de mi crecimiento profesional y mi compromiso con el 
                aprendizaje continuo.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AllProjectsPage;
