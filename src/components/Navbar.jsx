// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   const navItems = ["home", "about", "skills", "journey", "education", "projects", "contact"];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentSection = navItems.find((id) => {
//         const el = document.getElementById(id);
//         if (!el) return false;
//         const { top, bottom } = el.getBoundingClientRect();
//         return top <= 120 && bottom >= 120;
//       });
//       if (currentSection) setActiveSection(currentSection);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     window.scrollTo({
//       top: el.offsetTop - 100, // increased offset for taller navbar
//       behavior: "smooth",
//     });
//     setIsOpen(false);
//   };

//   return (
//     <nav className="fixed w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-md transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between"> {/* Increased padding for height */}
//         {/* Logo */}
//         <div
//           className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 cursor-pointer"
//           onClick={() => scrollToSection("home")}
//         >
//           Roshan
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex space-x-8 lg:space-x-12 items-center"> {/* Increased spacing */}
//           {navItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className={`relative capitalize text-gray-700 dark:text-gray-300 font-semibold text-lg sm:text-xl transition-all duration-300
//                 ${activeSection === item ? "text-blue-600 dark:text-blue-400" : "hover:text-blue-500 dark:hover:text-blue-300"}
//               `}
//             >
//               {item}
//               <span
//                 className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300
//                   ${activeSection === item ? "w-full" : "group-hover:w-full"}
//                 `}
//               />
//             </button>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
//           >
//             {isOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 overflow-hidden ${
//           isOpen ? "max-h-screen opacity-100 py-5" : "max-h-0 opacity-0 py-0"
//         }`}
//       >
//         <div className="flex flex-col items-center space-y-4">
//           {navItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className={`capitalize w-full py-3 text-gray-700 dark:text-gray-300 font-semibold text-lg sm:text-xl hover:text-blue-500 dark:hover:text-blue-300 transition`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = ["home", "about", "skills", "journey", "education", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // offset for navbar
      let currentSection = "home";

      navItems.forEach((id) => {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          currentSection = id;
        }
      });

      // ✅ Fix: if scrolled to very bottom, set active to contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop - 100, // offset for navbar
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Roshan
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 lg:space-x-12 items-center">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative capitalize text-gray-700 dark:text-gray-300 font-semibold text-lg sm:text-xl transition-all duration-300
                ${activeSection === item ? "text-blue-600 dark:text-blue-400" : "hover:text-blue-500 dark:hover:text-blue-300"}
              `}
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300
                  ${activeSection === item ? "w-full" : "group-hover:w-full"}
                `}
              />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 py-5" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize w-full py-3 text-gray-700 dark:text-gray-300 font-semibold text-lg sm:text-xl hover:text-blue-500 dark:hover:text-blue-300 transition`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
