
import React from 'react';
import { Download, ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-500/10 via-blue-500/10 to-purple-500/10 dark:from-cyan-600/20 dark:via-blue-600/20 dark:to-purple-600/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center">
                <img 
                  src="/src/components/images/profile.jpg"
                  alt="Yagnesh Reddy Koramoni"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30 animate-pulse"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Yagnesh Reddy Koramoni
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            Full-Stack Developer | Data Science Enthusiast
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            "Bringing ideas to life through code and data."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => window.open('/src/components/pdfs/resume.pdf', '_blank')}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              <span>View Resume</span>
            </button>

            <button 
              onClick={() => scrollToSection('#projects')}
              className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transform hover:scale-105 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <ArrowRight size={20} />
            </button>

            <button 
              onClick={() => scrollToSection('#contact')}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Contact Me
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/yagneshreddykoramoni" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yagnesh-reddy-koramoni-a8b0a2259/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
