import React from 'react';
import { Database, Globe, Server, Code } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      icon: <Database className="text-white" size={24} />, 
      title: "MongoDB",
      description: "NoSQL Database Expert"
    },
    { 
      icon: <Server className="text-white" size={24} />, 
      title: "Express.js",
      description: "Backend Framework"
    },
    { 
      icon: <Code className="text-white" size={24} />, 
      title: "React",
      description: "Frontend Library"
    },
    { 
      icon: <Globe className="text-white" size={24} />, 
      title: "Node.js",
      description: "Runtime Environment"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 p-14">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 mb-4">
            About Me 
          </h1>
          <div className="h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(({ icon, title, description }) => (
            <div 
              key={title}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500 dark:bg-blue-600 rounded-lg shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
            Experienced MERN stack developer specializing in building scalable web applications. 
            My expertise spans the entire development lifecycle, from database design to responsive UI implementation.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            I focus on creating efficient, maintainable solutions using modern development practices 
            and staying current with the latest technologies in the MERN ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;