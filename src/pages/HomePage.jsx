import React from 'react'
import HeroSection from '../components/Hero/HeroSection'
import ProjectsSection from '../components/Project/ProjectSection';
import AboutSection from '../components/Hero/AboutSection';
import Footer from '../components/Common/Footer';

const HomePage = () => {
    const skills = [
        "React", "React Native", "Node.js", "Express", "TypeScript", 
        "JavaScript", "MongoDB", "PostgreSQL", "MySQL", "Git",
        "Tailwind CSS", "REST APIs", "Docker", "AWS"
    ];

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden pt-20">
            <div className="layout-container flex h-full grow flex-col">
                <div className="w-full">
                    <div className="layout-content-container flex flex-col w-full">
                        {/* Hero Section */}
                        <HeroSection />
                        
                        {/* About Section */}
                        <AboutSection />
                        
                        {/* Skills Section */}
                        <section className="w-full py-16 px-4">
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                                    Habilidades <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">&amp; Tecnologías</span>
                                </h2>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {skills.map((skill, index) => (
                                        <div 
                                            key={index} 
                                            className="group relative px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                                        >
                                            <p className="text-white font-medium relative z-10">{skill}</p>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        
                        {/* Projects Section */}
                        <ProjectsSection />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage