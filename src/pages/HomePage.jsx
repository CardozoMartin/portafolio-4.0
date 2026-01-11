import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import ProjectsSection from "../components/Project/ProjectSection";
import AboutSection from "../components/Hero/AboutSection";
import Footer from "../components/Common/Footer";

const HomePage = () => {
  const skills = [
    "React",
    "React Native",
    "Node.js",
    "Express",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Git",
    "Tailwind CSS",
    "REST APIs",
    "Docker",
    "AWS",
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

            {/* Projects Section */}
            <ProjectsSection />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
