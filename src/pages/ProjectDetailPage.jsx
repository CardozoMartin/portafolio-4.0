import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  // Obtener datos del proyecto desde el state de navegación
  const projectData = location.state?.project;

  // Si no hay datos del proyecto, mostrar error
  if (!projectData) {
    return (
      <div className="min-h-screen bg-[#1a1d23] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
          <p className="text-[#9cabba] mb-6">No se pudieron cargar los datos del proyecto.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1d23] text-white">
      {/* Header */}
      <header className="bg-[#23272f] border-b border-[#2d3339] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[#9cabba] hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a Proyectos
            </button>
            
            <div className="flex items-center gap-4">
              {projectData.liveUrl && (
                <a
                  href={projectData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Ver Demo
                </a>
              )}
              
              <a
                href={projectData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2d3339] hover:bg-[#3d4349] px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{projectData.title}</h1>
          <p className="text-[#9cabba] text-xl max-w-3xl mx-auto mb-2">
            {projectData.shortDescription}
          </p>
          {projectData.link && (
            <div className="mb-6">
              <a 
                href={projectData.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {projectData.link}
              </a>
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className={`px-3 py-1 rounded-full ${
              projectData.status === 'Completado' 
                ? 'bg-green-600/20 text-green-400'
                : 'bg-yellow-600/20 text-yellow-400'
            }`}>
              {projectData.status}
            </span>
            <span className="bg-[#2d3339] text-[#9cabba] px-3 py-1 rounded-full">
              Duración: {projectData.duration}
            </span>
            <span className="bg-[#2d3339] text-[#9cabba] px-3 py-1 rounded-full">
              Equipo: {projectData.team}
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#23272f] rounded-lg p-1 flex gap-1">
            {[
              { id: 'overview', label: 'Descripción' },
              { id: 'gallery', label: 'Galería' },
              { id: 'videos', label: 'Videos' },
              { id: 'tech', label: 'Tecnologías' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-[#9cabba] hover:text-white hover:bg-[#2d3339]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Descripción del Proyecto</h2>
              <div className="prose prose-invert max-w-none">
                {projectData.detailedDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-[#9cabba] leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Features Sidebar */}
            <div className="bg-[#23272f] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Características Principales</h3>
              <ul className="space-y-3">
                {projectData.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span className="text-[#9cabba] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="space-y-8">
            {/* Verificar si hay imágenes disponibles */}
            {projectData.images && projectData.images.length > 0 ? (
              <>
                {/* Main Image Display */}
                <div className="bg-[#23272f] rounded-xl overflow-hidden">
                  <div className="aspect-video relative">
                    <img 
                      src={projectData.images[activeImageIndex].url} 
                      alt={projectData.images[activeImageIndex].title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = projectData.image;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {projectData.images[activeImageIndex].title}
                    </h3>
                    <p className="text-[#9cabba]">
                      {projectData.images[activeImageIndex].description}
                    </p>
                  </div>
                </div>

                {/* Image Thumbnails */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {projectData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`aspect-video rounded-lg overflow-hidden transition-all duration-200 ${
                        activeImageIndex === index
                          ? 'ring-2 ring-blue-500 opacity-100'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = projectData.image;
                        }}
                      />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-[#23272f] rounded-xl overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={projectData.image} 
                    alt={projectData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {projectData.title}
                  </h3>
                  <p className="text-[#9cabba]">
                    Vista principal del proyecto
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectData.videos && projectData.videos.length > 0 ? (
              projectData.videos.map((video, index) => (
                <div key={index} className="bg-[#23272f] rounded-xl overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-[#9cabba]">{video.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-[#9cabba] text-lg">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p>Videos de demostración próximamente</p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectData.techStack ? (
              Object.entries(projectData.techStack).map(([category, techs]) => (
                <div key={category} className="bg-[#23272f] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 capitalize text-blue-400">
                    {category === 'frontend' ? 'Frontend' : 
                     category === 'backend' ? 'Backend' :
                     category === 'integrations' ? 'Integraciones' : 'Herramientas'}
                  </h3>
                  <div className="space-y-3">
                    {techs.map((tech, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-[#9cabba]">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full">
                <div className="bg-[#23272f] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-blue-400">
                    Tecnologías Utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {projectData.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-2 bg-[#2d3339] text-[#9cabba] rounded-lg border border-[#3d4349]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectDetailPage;