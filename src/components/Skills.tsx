import React from 'react';
import { 
  SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, 
  SiTailwindcss, SiNumpy, SiPandas, SiTensorflow, SiScikitlearn,
  SiGit, SiGithub, SiMysql, SiMongodb, SiNodedotjs, SiExpress, SiC
} from 'react-icons/si';
import { Database, Brain, Code2, Wrench, Coffee } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={24} />,
      skills: [
        { name: "Python", icon: <SiPython className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "Java", icon: <Coffee className="text-orange-600" /> },
        { name: "C", icon: <SiC className="text-blue-700" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-600" /> }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Technologies",
      icon: <Code2 size={24} />,
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        { name: "ReactJS", icon: <SiReact className="text-cyan-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> }
      ],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Data Science & ML",
      icon: <Brain size={24} />,
      skills: [
        { name: "NumPy", icon: <SiNumpy className="text-blue-600" /> },
        { name: "Pandas", icon: <SiPandas className="text-purple-600" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-600" /> }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      skills: [
        { name: "Git", icon: <SiGit className="text-red-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-white" /> },
        { name: "VS Code", icon: <Code2 className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
      ],
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700 h-full relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className={`group/skill bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 hover:scale-105 hover:shadow-md ${category.skills.length > 4 ? 'col-span-1' : 'col-span-1'}`}
                      >
                        <div className="flex flex-col items-center text-center space-y-3">
                          <div className="text-3xl transform group-hover/skill:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Pills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Leadership', 'Team Management', 'Communication', 'Project Management', 'Logical Reasoning', 'Problem Solving'].map((skill) => (
              <span 
                key={skill} 
                className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-200 cursor-default border border-purple-200 dark:border-purple-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;