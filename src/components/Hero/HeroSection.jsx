import React, { useState, useEffect } from 'react';

// Componente de animación de código
const CodeRain = () => {
  const [codeLines, setCodeLines] = useState([]);
  
  const codeSnippets = [
    '',
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLines = [...prev];
        
        // Añadir nueva línea ocasionalmente
        if (Math.random() > 0.7 && newLines.length < 6) {
          newLines.push({
            id: Math.random(),
            text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
            opacity: 0,
            y: -20
          });
        }
        
        // Animar líneas existentes
        return newLines.map(line => ({
          ...line,
          opacity: Math.min(line.opacity + 0.1, 1),
          y: line.y + 1
        })).filter(line => line.y < 100 && line.opacity > 0);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeLines.map((line) => (
        <div
          key={line.id}
          className="absolute text-green-400 font-mono text-xs whitespace-nowrap"
          style={{
            opacity: line.opacity,
            transform: `translateY(${line.y}px)`,
            left: `${Math.random() * 80}%`,
            transition: 'all 0.2s ease-out'
          }}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
};

// Componente de partículas flotantes
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const initialParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.8 + 0.2
    }));
    
    setParticles(initialParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + 100) % 100,
        y: (particle.y + particle.speedY + 100) % 100,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transition: 'all 0.05s linear'
          }}
        />
      ))}
    </div>
  );
};

// Componente de texto animado tipo máquina de escribir
const TypewriterText = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, delay);

    // Cursor blinking
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="text-green-400">|</span>}
    </span>
  );
};

// Componente principal HeroSection
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="@container flex flex-wrap gap-6 justify-center px-4 w-full mx-auto">
      <div className="@[480px]:p-4 w-full max-w-6xl">
        <div
          className="relative flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJV8mAG8Y33qXE4kFGXxGD60CY9LLhgsOHspqqMdfAq3k27XVPHrxstfNJQdJbCf00lTUuiVPKeXAj0rbZFRjAgA03uTZktxuCqaFNOKmcnetyTElmyxVhmBoDLzwswGKLrAvRkt54i7EG7KcF9B6tVR5CsQFrpThffHnBMoR1z4yiW99-4hdTA4J3zkzqhRbv385XJ5Oi_8ZeKNwkT5j45mldQOdl_MwCCq8HiwG8KrD9FY5chs_NPsGJ6k7aRTbxI_11a19u0fT9")`
          }}
        >
          {/* Animaciones de fondo */}
          <CodeRain />
          <FloatingParticles />
          
          {/* Overlay con patrón de código */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 font-mono text-xs text-green-400 transform rotate-12">
              {'{ "developer": "creative" }'}
            </div>
            <div className="absolute bottom-20 left-4 font-mono text-xs text-blue-400 transform -rotate-6">
              {'<Innovation />'}
            </div>
            <div className="absolute top-1/3 left-1/3 font-mono text-xs text-purple-400">
              {'await buildDreams();'}
            </div>
          </div>

          {/* Contenido principal */}
          <div className={`relative z-10 flex flex-col gap-6 text-left transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Título con animación */}
            <div className="flex flex-col gap-2">
              <div className="text-green-400 font-mono text-sm mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <TypewriterText text="$ npm run create-magic" delay={80} />
              </div>
              
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] relative">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Cardozo Martin Daniel
                </span>
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform skew-x-12 animate-pulse" 
                     style={{ animationDelay: '2s', animationDuration: '3s' }}>
                </div>
              </h1>
              
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal mt-4 max-w-lg">
                Desarrollador Full Stack & Mobile | Apasionado por crear experiencias digitales excepcionales
                <br />
                Estudiante de Tecnicatura en Programación en la UTN Facultad Regional Tucuman
                <br></br>
                <span className="text-blue-300 font-medium"> Construyamos algo increíble juntos.</span>
              </h2>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col @[480px]:flex-row gap-4 mt-4">
              <button className="group flex min-w-[140px] max-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gradient-to-r from-[#0d80f2] to-[#0ea5e9] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                <span className="truncate">Ver Proyectos</span>
                <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button className="flex min-w-[140px] max-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border-2 border-white/20 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                <span className="truncate">Contacto</span>
              </button>
            </div>

            {/* Stats o indicadores */}
            <div className="flex gap-6 mt-6 text-white/80 text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Status: Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Mode: Creative</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Ready: true</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;