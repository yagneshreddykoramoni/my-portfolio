
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    
    // Add custom CSS variables for enhanced dark mode
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--bg-primary', '15 23 42'); // slate-900
      document.documentElement.style.setProperty('--bg-secondary', '30 41 59'); // slate-800
      document.documentElement.style.setProperty('--text-primary', '248 250 252'); // slate-50
      document.documentElement.style.setProperty('--accent-primary', '147 51 234'); // purple-600
      document.documentElement.style.setProperty('--accent-secondary', '236 72 153'); // pink-500
    } else {
      document.documentElement.style.setProperty('--bg-primary', '255 255 255'); // white
      document.documentElement.style.setProperty('--bg-secondary', '248 250 252'); // slate-50
      document.documentElement.style.setProperty('--text-primary', '15 23 42'); // slate-900
      document.documentElement.style.setProperty('--accent-primary', '147 51 234'); // purple-600
      document.documentElement.style.setProperty('--accent-secondary', '236 72 153'); // pink-500
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
