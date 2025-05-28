
import React from 'react';
import { Code, Database, Lightbulb, Users, ExternalLink } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description: "Skilled in modern web technologies including ReactJS, HTML, CSS, and JavaScript",
    },
    {
      icon: <Database size={24} />,
      title: "Data Science",
      description: "Experienced with Python, ML algorithms, and data visualization tools",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Problem Solving",
      description: "Strong analytical thinking and logical reasoning abilities",
    },
    {
      icon: <Users size={24} />,
      title: "Leadership",
      description: "Leading 80-member club and managing various projects and events",
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate and driven Computer Science and Data Science student at Institute of Aeronautical Engineering, Hyderabad. 
              Skilled in both full stack technologies and data science tools, with experience in real-world AI and ML projects.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Strong leadership and problem-solving abilities backed by project experience, club leadership, and competition success. 
              I thrive on turning complex problems into elegant solutions and leading teams to achieve ambitious goals.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Leadership', 'Innovation', 'Communication'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-purple-600 dark:text-purple-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
