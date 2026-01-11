import React, { useState, useEffect } from 'react';
import { Code2, Database, Rocket, Users } from 'lucide-react';

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('about-section');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "5+", label: "Años de experiencia", icon: Rocket },
    { number: "30+", label: "Proyectos completados", icon: Code2 },
    { number: "15+", label: "Clientes satisfechos", icon: Users },
    { number: "99%", label: "Uptime en producción", icon: Database }
  ];

  const expertise = [
    {
      area: "Frontend Moderno",
      description: "Interfaces reactivas con React, animaciones fluidas y diseño responsive"
    },
    {
      area: "Arquitectura Backend",
      description: "APIs escalables, microservicios y gestión eficiente de bases de datos"
    },
    {
      area: "DevOps & Deployment",
      description: "CI/CD, contenedores Docker y despliegues automatizados en la nube"
    }
  ];

  return (
    <section 
      id="about-section"
      className="w-full min-h-screen py-20 px-4 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-blue-950/20 pointer-events-none transition-opacity duration-1000"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      
      {/* Floating Orbs */}
      <div 
        className="absolute top-20 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute bottom-40 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div 
          className="mb-20 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : 30}px)`,
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium tracking-wide">
              SOBRE MÍ
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Full Stack Developer
          </h2>
          
          <p className="text-violet-300 text-xl font-light tracking-wide">
            Creando experiencias completas de extremo a extremo
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Personal Story */}
          <div 
            className="space-y-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateX(${isVisible ? 0 : -30}px)`,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p className="text-lg font-light">
                Soy un <span className="text-white font-normal">desarrollador full stack apasionado</span> por crear 
                aplicaciones completas que no solo se vean bien, sino que <span className="text-violet-400">funcionen de manera impecable</span>.
              </p>
              
              <p className="text-base">
                Durante los últimos 5 años, he construido aplicaciones de principio a fin, desde interfaces 
                de usuario intuitivas hasta arquitecturas backend robustas. Me encanta tener el control 
                completo del producto, asegurando coherencia entre todas las capas de la aplicación.
              </p>
              
              <p className="text-base">
                Mi filosofía es simple: <span className="text-white font-medium">código limpio, experiencias fluidas y arquitectura sólida</span>. 
                Desde el primer pixel hasta la última consulta a la base de datos, cada decisión está 
                pensada para crear productos que deleiten a los usuarios y escalen con el negocio.
              </p>
              
              <p className="text-base">
                Trabajo con <span className="text-violet-400 font-medium">React, Node.js, Python y PostgreSQL</span>, 
                combinando lo mejor del frontend moderno con backends eficientes para crear soluciones 
                completas que resuelven problemas reales.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 italic">
                "El mejor producto es aquel donde frontend y backend trabajan en perfecta armonía"
              </p>
            </div>
          </div>

          {/* Right Column - Expertise */}
          <div 
            className="space-y-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateX(${isVisible ? 0 : 30}px)`,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
            }}
          >
            <h3 className="text-2xl font-light text-white mb-8 tracking-tight">
              Áreas de especialización
            </h3>
            
            <div className="space-y-5">
              {expertise.map((item, index) => (
                <div 
                  key={index}
                  className="group p-5 bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all duration-300 hover:bg-white/[0.07]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: `translateY(${isVisible ? 0 : 20}px)`,
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.6 + index * 0.1}s`
                  }}
                >
                  <h4 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">
                    {item.area}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Redes Sociales */}
            <div className="pt-12 mt-8 border-t border-white/10">
              <h4 className="text-white font-light text-sm mb-6 tracking-wide">Conéctate conmigo</h4>
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="https://github.com/CardozoMartin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white"
                  title="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://linkedin.com/in/cardozomartin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-blue-400/30 hover:bg-blue-500/10 transition-all duration-300 text-gray-300 hover:text-blue-400"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.809 0-9.73h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.588zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.713 0-.958.77-1.714 1.959-1.714 1.188 0 1.914.756 1.938 1.714 0 .952-.75 1.713-1.982 1.713zm1.946 11.597H3.392V9.722h3.891v10.73zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://wa.me/tu-numero" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-green-400/30 hover:bg-green-500/10 transition-all duration-300 text-gray-300 hover:text-green-400"
                  title="WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.896 10.823 1.572 3.21 4.747 5.17 8.382 5.17h.004c3.947 0 7.704-2.188 9.619-5.661 1.432-2.486 1.627-5.646.6-8.461-2.4-6.542-9.519-9.848-16.684-7.249zm7.896-1.289C19.038 1.129 22.199 0 25.266 0c.37 0 .64.288.766.717l.143.466c.327 1.007.351 2.137.1 3.204l-.003.012c-.178.629-.639 1.159-1.265 1.46-.821.396-1.770.528-2.681.466-.461-.03-.945-.16-1.386-.35-.603-.258-1.168-.664-1.629-1.188-.623-.71-1.156-1.625-1.415-2.687-.124-.53-.126-1.156.025-1.7.049-.18.124-.358.247-.514.052-.065.113-.128.185-.183z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://t.me/tu-usuario" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-blue-400/30 hover:bg-blue-400/10 transition-all duration-300 text-gray-300 hover:text-blue-400"
                  title="Telegram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.365-1.337.175-.437-.148-1.33-.414-1.98-.742-.798-.342-1.432-.53-1.374-.893.03-.164.487-.408 1.234-.601 3.798-.822 8.463-1.087 11.251-1.404.055-.005.11 0 .166.002z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://instagram.com/tu-usuario" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-pink-400/30 hover:bg-pink-500/10 transition-all duration-300 text-gray-300 hover:text-pink-400"
                  title="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2.17" y="2.17" width="19.66" height="19.66" rx="4.58" ry="4.58" fill="none" stroke="currentColor" strokeWidth="1.41"/>
                    <path d="M12 8.92a3.08 3.08 0 1 0 3.08 3.08A3.08 3.08 0 0 0 12 8.92z" fill="currentColor"/>
                    <circle cx="18.08" cy="5.92" r="0.72" fill="currentColor"/>
                  </svg>
                </a>
                
                <a 
                  href="https://tiktok.com/@tu-usuario" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-black/30 hover:bg-black/10 transition-all duration-300 text-gray-300 hover:text-white"
                  title="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.589 5.861a5.881 5.881 0 0 1-4.31-1.745 6.116 6.116 0 0 1-1.208-1.584A5.859 5.859 0 0 1 12 .5a5.861 5.861 0 1 1 5.589 5.361zM9.04 15.98a7.003 7.003 0 0 1 .959 3.509c0 1.944-.769 3.792-2.156 5.165A7.35 7.35 0 0 1 5.5 27a7.35 7.35 0 0 1-5.343-2.346A7.35 7.35 0 0 1 0 18.5a7.003 7.003 0 0 1 .959-3.509"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
       
      </div>
    </section>
  );
};

export default AboutSection;