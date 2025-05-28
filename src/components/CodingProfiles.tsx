import React from 'react';
import { ExternalLink, Star, Trophy, Code } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "yagneshreddykoramoni",
      stats: "350+ Problems Solved",
      description: "Active problem solver with focus on algorithms and data structures",
      color: "from-orange-500 to-yellow-500",
      icon: <Code size={24} />,
      link: "https://leetcode.com/u/yagneshreddykoramoni/"
    },
    {
      platform: "HackerRank",
      username: "yagneshreddykor1",
      stats: "Python (5★), Java (3★), SQL (4★)",
      description: "High ratings across multiple programming domains",
      color: "from-green-500 to-blue-500",
      icon: <Star size={24} />,
      link: "https://www.hackerrank.com/profile/yagneshreddykor1"
    },
    {
      platform: "CodeChef",
      username: "yagneshreddyyy",
      stats: "130+ Problems Solved",
      description: "Regular participant in competitive programming contests",
      color: "from-purple-500 to-pink-500",
      icon: <Trophy size={24} />,
      link: "https://www.codechef.com/users/yagneshreddyyy"
    },
    {
      platform: "GeeksForGeeks",
      username: "yagneshredd6ut1",
      stats: "30+ Problems, 100+ Score",
      description: "Active problem solver with compitative programming skills",
      color: "from-blue-500 to-cyan-500",
      icon: <Trophy size={24} />,
      link: "https://www.geeksforgeeks.org/user/yagneshredd6ut1/"
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Coding <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Profiles</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Active across multiple programming platforms with strong problem-solving track record
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 group hover:-translate-y-2">
              <div className="text-center mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${profile.color} text-white mb-3`}>
                  {profile.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {profile.platform}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 break-all">
                  @{profile.username}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-center font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {profile.stats}
                </p>
                <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                  {profile.description}
                </p>
              </div>

              {profile.link ? (
                <a 
                  href={profile.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 hover:from-blue-500 hover:to-purple-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
                >
                  <span>Visit Profile</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-400 dark:text-gray-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                  <span>Link Coming Soon</span>
                  <ExternalLink size={14} />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700">
            <Trophy className="text-yellow-500" size={32} />
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Total Problems Solved
              </h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                500+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;