import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const {
    id,
    image,
    title,
    description,
    githubUrl,
    technologies = []
  } = project;

  return (
    <div className="group relative bg-[#23272f] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#2d3339] hover:border-[#3d4349]">
      {/* Imagen del proyecto */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#23272f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay con botón de GitHub */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 hover:bg-white text-[#23272f] px-6 py-2.5 rounded-full font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver Código
          </a>
        </div>
      </div>

      {/* Contenido de la card */}
      <div className="p-6">
        {/* Título */}
        <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-[#9cabba] text-sm leading-relaxed mb-4 line-clamp-4">
          {description}
        </p>

        {/* Tecnologías */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 bg-[#2d3339] text-[#9cabba] text-xs rounded-full border border-[#3d4349] hover:bg-[#3d4349] transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-2.5 py-1 bg-[#2d3339] text-[#9cabba] text-xs rounded-full border border-[#3d4349]">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Enlaces */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9cabba] hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <Link 
            to={`/projectDetail/${id}`} 
            state={{ project }}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium flex items-center gap-1"
          >
            Ver más
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;