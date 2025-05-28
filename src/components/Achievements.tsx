
import React from 'react';
import { Trophy, Users, Code, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "TCS CodeVita 2024 Qualifier",
      description: "Successfully cleared Round 1 of TCS CodeVita 2024, demonstrating strong problem-solving and coding skills",
      icon: <Code size={24} />,
      color: "from-yellow-500 to-orange-500",
      year: "Dec 2024"
    },
    {
      title: "President, The Compendium",
      description: "Leading a 80-member club, handling newsletters and event coverage with excellent leadership and management skills",
      icon: <Users size={24} />,
      color: "from-blue-500 to-purple-500",
      year: "Current"
    },
    {
      title: "2nd Place - Quick Innovation Challenge",
      description: "Secured second position in Quick Innovation Challenge at IARE, showcasing innovation and technical expertise",
      icon: <Trophy size={24} />,
      color: "from-green-500 to-blue-500",
      year: "Jan 2024"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Key <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="relative group">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 h-full">
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} text-white mb-4`}>
                    {achievement.icon}
                  </div>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">
                    {achievement.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {achievement.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {achievement.description}
                </p>

                <div className="mt-6 flex justify-center">
                  <Star className="text-yellow-500" size={20} />
                </div>
              </div>

              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
