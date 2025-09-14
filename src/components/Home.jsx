import React from "react";
import { Github, Linkedin, Download, Sparkles } from "lucide-react";
import profile from "../assets/dp.jpg";

function App() {
  // Convert Google Drive link to direct download link
  const resumeUrl = "https://drive.google.com/file/d/1ihyb-eA5G1eZDy14UmDskcc6He1x2YI8/view?usp=drive_link";

  const socialLinks = [
    {
      Icon: Github, 
      href: "https://github.com/roshanrbhamare",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
      bgHover: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/roshan-bhamare-a8700928a",
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
      bgHover: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
    },
    {
      // Custom LeetCode icon using SVG
      Icon: () => (
        <svg 
          viewBox="0 0 24 24" 
          width="100%" 
          height="100%" 
          fill="currentColor"
        >
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zm4.709-4.92H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
        </svg>
      ),
      href: "https://leetcode.com/u/Roshan_iiits/",
      label: "LeetCode",
      color: "hover:text-yellow-600 dark:hover:text-yellow-400",
      bgHover: "hover:bg-yellow-50 dark:hover:bg-yellow-900/30",
    }
  ];

  const handleDownload = (e) => {
    e.preventDefault();
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[length:24px_24px] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(120,119,198,0.05)_50%,transparent_52%)] bg-[length:24px_24px]"></div>
      </div>

      {/* Main content - Added pt-24 for navbar spacing */}
      <div className="relative flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8 pt-24 md:pt-28">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16 max-w-7xl mx-auto w-full">
          {/* Profile Image Section */}
          <div className="relative group w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex-shrink-0 mt-8 sm:mt-12">
            {/* Ripple effects */}
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30"></div>
            <div
              className="absolute inset-0 rounded-full border-2 border-violet-500/20"
            ></div>
            <div
              className="absolute inset-0 rounded-full border-2 border-blue-500/10"
            ></div>

            {/* Main image container */}
            <div className="relative">
              <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-700">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>

              {/* Rotating borders */}
              <div className="absolute -inset-2 border-2 border-dashed border-blue-500/20 rounded-full"></div>
              <div
                className="absolute -inset-4 border-2 border-dashed border-purple-500/20 rounded-full"
              ></div>
              <div
                className="absolute -inset-6 border-2 border-dotted border-indigo-500/10 rounded-full"
              ></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-2xl w-full px-4 sm:px-6">
            {/* Name and Title */}
            <div className="relative mb-8 text-center lg:text-left">
              <div className="absolute -left-12 top-0 flex flex-col space-y-2 sm:space-y-3">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-400" />
                <Sparkles
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400"
                />
              </div>

              {/* Greeting and name */}
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 font-medium mb-2">
                  Hi, I am
                </h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 whitespace-nowrap">
                    Roshan Bhamare
                  </span>
                </h1>
              </div>

              <p className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-300 mb-6 font-medium tracking-wide">
                <span className="relative inline-block">
                  Full Stack Developer
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </span>
              </p>
            </div>

            {/* Bio */}
            <div className="prose prose-lg dark:prose-invert max-w-none text-center lg:text-left">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg sm:text-xl">
                As a passionate Full Stack Developer, I craft modern digital
                experiences that combine elegant design with robust
                functionality. Specializing in building scalable web
                applications, I transform complex challenges into intuitive
                solutions using cutting-edge technologies.
              </p>
            </div>

            {/* Social Links with Resume Download */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 sm:mt-12 justify-center lg:justify-start">
              <div className="flex flex-wrap gap-6">
                {socialLinks.map(({ Icon, href, label, color, bgHover }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group relative"
                  >
                    <div
                      className={`relative p-3 sm:p-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 ${bgHover} flex items-center justify-center`}
                    >
                      {/* For standard Lucide icons */}
                      {(label === "GitHub" || label === "LinkedIn") && (
                        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-300 ${color}`} />
                      )}
                      
                      {/* For custom SVG icons */}
                      {(label === "LeetCode") && (
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-300 ${color}`}>
                          <Icon />
                        </div>
                      )}
                      
                      <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/90 dark:bg-gray-700/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
                        {label}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Resume Download Link */}
              <a
                href={resumeUrl}
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

