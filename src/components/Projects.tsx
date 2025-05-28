import React from 'react';
import { Github, ExternalLink, Code, Smartphone, Star, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EXPENSE TRACKER WITH BUDGET MANAGEMENT",
      subtitle: "Full-Stack Financial Management Application",    
      description: "A comprehensive web application that allows users to track daily expenses, categorize spending, set monthly budgets, and gain financial insights through interactive visualizations and automated notifications.", 
      technologies: ["React", "Redux", "MongoDB", "D3.js", "JWT"],    
      github: "https://github.com/yagneshreddykoramoni/Expense-tracker-with-Budget-management",    
      demo: "https://expense-tracker-wit-git-49a468-yagnesh-reddy-koramonis-projects.vercel.app/",    
      features: [    
        "Real-time expense tracking and categorization",    
        "Monthly budget management with alerts",    
        "Interactive data visualizations (D3.js charts)",    
        "Automated report generation (PDF/CSV export)",    
        "Responsive dashboard with customizable metrics"    
      ],
      icon: <Code size={28} />,
      gradient: "from-purple-500 via-pink-500 to-red-500",
      featured: true
    },
    {
      title: "OFFLINE TRANSLATOR",
      subtitle: "Multilingual Translator with OCR & Voice Input",
      description: "A comprehensive offline translation app that supports real-time text, voice, and image translation.",
      technologies: ["Google ML Kit", "OCR", "Speech-to-Text", "Android Studio"],
      github: "https://github.com/yagneshreddykoramoni/Translator",
      demo: "https://github.com/yagneshreddykoramoni/Translator",
      features: [
        "Real-time text translation",
        "Voice input and output",
        "Image text recognition (OCR)",
        "Dark/Light mode interface",
        "Multiple language support"
      ],
      icon: <Smartphone size={28} />,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      featured: false
    },
    {
      title: "PORTFOLIO WEBSITE",
      subtitle: "Modern Full-Stack Developer Portfolio",
      description: "A comprehensive, responsive portfolio website showcasing skills, achievements, projects and technical expertise with modern design principles and GitHub integration.",
      technologies: ["ReactJS", "Tailwind CSS"],
      github: "https://github.com/yagneshreddykoramoni/my-portfolio",
      demo: "https://yagneshreddy.vercel.app/",
      features: [
        "GitHub activity integration and visualization",
        "Downloadable resume functionality",
        "Interactive coding profiles showcase",
        "Responsive design across all devices",
        "Loading animations and smooth transitions"
      ],
      icon: <Code size={28} />,
      gradient: "from-emerald-500 via-blue-500 to-purple-500",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-red-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Zap size={16} />
            Featured Work
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My Latest{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover my recent work showcasing modern development practices, innovative solutions, and cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-slate-700/50 hover:scale-[1.02] ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              <div className="absolute inset-[1px] bg-white dark:bg-slate-800 rounded-2xl"></div>
              
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                  <Star size={12} fill="currentColor" />
                  FEATURED
                </div>
              )}

              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text font-semibold text-lg`}>
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">✨ Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">🛠️ Built With</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-3 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
                  >
                    <Github size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>View Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn flex items-center gap-3 bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold hover:scale-105`}
                  >
                    <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${project.gradient} blur-xl transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;