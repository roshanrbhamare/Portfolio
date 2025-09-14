import React from "react";
import { Github, ExternalLink, Server, Database, Code2 } from "lucide-react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

function Projects() {
  const projects = [
    {
      title: "SwiftMart",
      subtitle: "Buy/Sell Platform with Stripe & Product Recs",
      description:
        "Developed a full-featured MERN stack marketplace platform for buying and selling new and pre-owned items, featuring secure Stripe payment integration for real-time transactions. Designed and implemented a virtual coin system to facilitate user engagement and microtransactions. Built a collaborative filtering-based recommendation engine to personalize product suggestions and improve user experience.",
      image: project1,
      github: "https://github.com/roshanrbhamare/ecommerce.git",
      demo: "https://sustainswap-swiftmart-2.onrender.com",
      technologies: [
        { name: "React", icon: <Code2 size={16} />, color: "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300" },
        { name: "Tailwind CSS", icon: <Code2 size={16} />, color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300" },
        { name: "Node.js", icon: <Server size={16} />, color: "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300" },
        { name: "Express", icon: <Server size={16} />, color: "bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300" },
        { name: "MongoDB", icon: <Database size={16} />, color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-300" },
      ],
    },
    {
      title: "Buzz Chat",
      subtitle: "Real-time Chat Application",
      description:
        "A real-time chat platform with secure authentication, one-to-one and group messaging, typing indicators, and responsive UI. Built with the MERN stack and WebSocket communication for instant updates.",
      image: project2,
      technologies: [
        { name: "React", icon: <Code2 size={16} />, color: "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300" },
        { name: "Tailwind CSS", icon: <Code2 size={16} />, color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300" },
        { name: "Node.js", icon: <Server size={16} />, color: "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300" },
        { name: "Express", icon: <Server size={16} />, color: "bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300" },
        { name: "MongoDB", icon: <Database size={16} />, color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-300" },
        { name: "Socket.IO", icon: <Server size={16} />, color: "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300" },
      ],
    },
    {
      title: "Hospital Management System",
      subtitle: "Core Java, OOP, MySQL, Console-Based UI",
      description:
        "A console-based hospital management system developed using Core Java to handle patient records, doctor schedules, and appointments. Features complete CRUD operations, MySQL integration via JDBC, and a clean console UI enhanced by user feedback.",
      image: project3,
      technologies: [
        { name: "Java", icon: <Code2 size={16} />, color: "bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300" },
        { name: "MySQL", icon: <Database size={16} />, color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300" },
        { name: "JDBC", icon: <Server size={16} />, color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300" },
        { name: "OOP", icon: <Code2 size={16} />, color: "bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-300" },
        { name: "Console UI", icon: <Code2 size={16} />, color: "bg-gray-100 text-gray-600 dark:bg-gray-900/50 dark:text-gray-300" },
      ],
    },
  ];

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block animate-fade-in mb-3">
            <span className="px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium">
              Portfolio Showcase
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 tracking-tight mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest works showcasing modern web development techniques
            and creative solutions
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
            >
              {/* Image Section */}
              <div
                className={`relative z-10 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative mx-auto max-w-md sm:max-w-lg p-2">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 dark:opacity-40 blur-3xl group-hover:opacity-30 dark:group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 z-10 mix-blend-overlay"></div>
                    <div className="w-full aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-6 right-6 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-purple-500/0"></div>
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`relative z-20 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative p-4 sm:p-5">
                  <div className="absolute -inset-3 bg-white/40 dark:bg-gray-800/40 rounded-3xl blur-2xl"></div>
                  <div className="relative space-y-4 sm:space-y-5">
                    <div className="space-y-2">
                      <span className="inline-block text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                        {project.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full ${tech.color} shadow-sm hover:shadow-md transition-all duration-300 translate-y-0 hover:-translate-y-0.5 pb-0.5 hover:pb-0`}
                        >
                          {tech.icon}
                          <span className="text-xs font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Only show buttons for the first project */}
                    {index === 0 && (
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
                        <a
                          href={project.demo}
                          className="group relative flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-medium transition-all duration-300 translate-y-0 hover:-translate-y-0.5 pb-2 hover:pb-1.5 hover:shadow-lg hover:shadow-blue-500/30 text-xs sm:text-sm"
                        >
                          <span>Live Preview</span>
                          <ExternalLink
                            size={16}
                            className="transform group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </a>

                        <a
                          href={project.github}
                          className="group flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 font-medium translate-y-0 hover:-translate-y-0.5 pb-2 hover:pb-1.5 text-xs sm:text-sm"
                        >
                          <Github size={16} />
                          <span>Source Code</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
