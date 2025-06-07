
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Institute of Aeronautical Engineering, Hyderabad",
      degree: "B.Tech – CSE (Data Science)",
      grade: "GPA: 7.91",
      duration: "Nov 2022 – Present",
      location: "Hyderabad",
      current: true
    },
    {
      institution: "Sri Chaitanya Junior College, Hyderabad",
      degree: "TGBIE – MPC",
      grade: "96.6%",
      duration: "July 2020 – March 2022",
      location: "Hyderabad",
      current: false
    },
    {
      institution: "Mount Basil High School, Mahabubnagar",
      degree: "CBSE",
      grade: "451/500",
      duration: "March 2020",
      location: "Mahabubnagar",
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-800 hidden md:block"></div>
                
                <div className="md:ml-20 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                      <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      {edu.current && (
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </p>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {edu.grade}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
