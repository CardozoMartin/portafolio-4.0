import React from 'react'
import HeroSection from '../components/Hero/HeroSection'

import ProjectsSection from '../components/Project/ProjectSection';
import AboutSection from '../components/Hero/AboutSection';
import Footer from '../components/Common/Footer';

const HomePage = () => {
    const skills = [
        "Web Development",
        "Mobile Development",
        "Backend Development",
        "React",
        "Node.js",
        "Swift",
        "Kotlin",
        "SQL",
        "NoSQL",
        "Cloud Services"
    ];



    return (
        <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden" >
            <div className="layout-container flex h-full grow flex-col">

                <div className="px-4 md:px-40 flex flex-1 justify-center py-5 w-full">
                    <div className="layout-content-container flex flex-col max-w-[960px] w-full flex-1">
                        <HeroSection />
                        <AboutSection />
                        <div>
                            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
                            <div className="flex gap-3 p-3 flex-wrap pr-4">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#283039] pl-4 pr-4">
                                        <p className="text-white text-sm font-medium leading-normal">{skill}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <ProjectsSection />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage