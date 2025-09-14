import React, { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ].map(skill => ({
    ...skill,
    yearsExp: Math.floor(Math.random() * 5) + 1,
  }));

  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 mb-8">
          Technical Expertise
        </h2>

        <div className="relative w-full overflow-hidden mt-16">
          <div className="flex animate-scroll">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="relative flex-none w-24 mx-3"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={` 
                  absolute left-1/2 -translate-x-1/2 -translate-y-full 
                  bg-black/90 text-white px-2 py-1 rounded-lg text-xs whitespace-nowrap 
                  transition-all duration-300 -top-2 
                  ${hoveredSkill === skill.name ? 'opacity-100 visible' : 'opacity-0 invisible'} 
                  z-30
                `}>
                  {skill.yearsExp} years experience
                  <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 
                    border-l-[6px] border-l-transparent 
                    border-r-[6px] border-r-transparent 
                    border-t-[6px] border-t-black/90">
                  </div>
                </div>

                <div className={` 
                  bg-white dark:bg-gray-800 rounded-xl p-3 
                  transform transition-all duration-300 ease-in-out origin-center 
                  ${hoveredSkill === skill.name ? 'scale-110 shadow-xl shadow-purple-500/20' : 'shadow-md'} 
                  relative z-20
                `}>
                  <div className="w-12 h-12 mx-auto mb-2">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-full h-full object-contain filter drop-shadow-lg dark:brightness-90"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium text-gray-800 dark:text-gray-100">
                    {skill.name}
                  </h3>
                </div>

                <div className={` 
                  absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                  rounded-xl transition-opacity duration-300 z-10 
                  ${hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'}
                `} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 15s linear infinite;
          width: fit-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.33% - 1rem));
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
