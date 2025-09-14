import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/roshanrbhamare', 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/roshan-bhamare-a8700928a', 
      label: 'LinkedIn' 
    }
  ];

  const ContactInfo = ({ icon: Icon, text, href, className = '' }) => (
    <a
      href={href}
      className={`group flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 ${className}`}
    >
      <div className="p-2 rounded-full bg-blue-100 dark:bg-gray-700 group-hover:bg-blue-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
        <Icon className="text-blue-600 dark:text-blue-400" size={20} />
      </div>
      <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {text}
      </span>
    </a>
  );

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Let's Connect
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Reach out to me through any of these channels.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <ContactInfo
                icon={Mail}
                text="roshanratilal.b23@iiits.in"
                href=""
              />
              <ContactInfo
                icon={Phone}
                text="+91 7249357267"
                href=""
              />
              <ContactInfo
                icon={MapPin}
                text="Maharashtra, India"
                href=""
              />
            </div>
          </div>

          {/* Connect on Social Media */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Connect on Social Media
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-2">
                    <Icon size={24} />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-600 dark:text-gray-400 mt-12">
        <p className="flex items-center justify-center">
          <span>Made with</span>
          <span className="text-2xl mx-2" role="img" aria-label="love">❤️</span>
          <span>by Roshan Bhamare</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;