import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Become a Python Data Analyst",
      issuer: "Wingspan | Infosys Springboard",
      year: "May 2025",
      description: "Python Data Analysis certification course",
      link: "https://drive.google.com/file/d/1vxMEbf23XF-E098v1YdyEiCkKxdYSmkP/view?usp=sharing" // Add your actual certificate link here
    },
    {
      title: "TCS CodeVita Season 12 Rank",
      issuer: "TCS (Tata Consultancy Services)",
      year: "Apr 2025",
      description: "Global coding competition certificate for exceptional coding skills",
      link: "https://drive.google.com/file/d/1sXKvieycauUUTapiIZ4bVBXnKklKCIRE/view?usp=sharing" 
    },
    {
      title: "AI: Transformative Learning",
      issuer: "TechSaksham",
      year: "Mar 2025",
      description: "AI and Machine Learning concepts",
      link: "https://techsaksham.org/verify-aicte-certificate/TSPIN24_612097"
    },
    {
      title: "Design and Analysis of Algorithms",
      issuer: "NPTEL",
      year: "Sep 2024",
      description: "Comprehensive course on algorithm design and complexity analysis",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS79S33680091802780519"
    },
    {
      title: "Introduction to Database Systems",
      issuer: "NPTEL",
      year: "Apr 2024",
      description: "Database design, SQL, and management principles",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS55S55740284130805511"
    },
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      year: "Jan 2024",
      description: "Java programming fundamentals and object-oriented concepts",
      link: "https://www.hackerrank.com/certificates/d082aa08db20"
    },
    {
      title: "Programming, Data Structures and Algorithms",
      issuer: "NPTEL",
      year: "Sep 2023",
      description: "Core programming concepts and algorithmic thinking",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS95S3570540010139161"
    },
    {
      title: "Data Science Using Python",
      issuer: "NSIC",
      year: "Jul 2023",
      description: "Introduction to data science tools and methodologies",
      link: "https://drive.google.com/file/d/1vE6hgnNKcRdN_7yQS--3XyWg3GiyKc9g/view?usp=sharing"
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      year: "Feb 2023",
      description: "Python programming for data analysis and visualization",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS21S3472095903136396"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 group hover:-translate-y-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-blue-600 dark:text-blue-400">
                  <Award size={24} />
                </div>
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={16} />
                  <span>{cert.year}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>

              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                {cert.issuer}
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {cert.description}
              </p>

              {cert.link ? (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span className="flex items-center space-x-2 text-gray-400 dark:text-gray-500 text-sm font-medium cursor-not-allowed">
                  <span>Certificate Link Coming Soon</span>
                  <ExternalLink size={14} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;