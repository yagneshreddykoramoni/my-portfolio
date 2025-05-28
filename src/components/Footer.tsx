
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/yagneshreddykoramoni',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yagnesh-reddy-koramoni-a8b0a2259/',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Email',
      href: 'mailto:yagneshreddykoramoni@gmail.com',
      icon: <Mail size={20} />
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Yagnesh Reddy Koramoni
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Passionate developer and data science enthusiast, dedicated to creating innovative solutions 
              and turning ideas into reality through code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Hyderabad, Telangana</p>
              <a 
                href="mailto:yagneshreddykoramoni@gmail.com"
                className="hover:text-blue-400 transition-colors duration-200 block"
              >
                yagneshreddykoramoni@gmail.com
              </a>
              <a 
                href="tel:+916304207006"
                className="hover:text-blue-400 transition-colors duration-200 block"
              >
                +91-6304207006
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} K Yagnesh Reddy. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-1" /> by Yagnesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
