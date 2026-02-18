// ThemeContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; // default to dark
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update CSS variables based on theme
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--bg-color', '#09090b');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--secondary-text', '#9ca3af');
      root.style.setProperty('--border-color', '#374151');
      root.style.setProperty('--card-bg', '#111827');
      root.style.setProperty('--navbar-bg', '#030712');
      root.style.setProperty('--footer-bg', '#0f1c2e');
      root.style.setProperty('--success-color', '#22c55e');
    } else {
      root.style.setProperty('--bg-color', '#f9fafb');
      root.style.setProperty('--text-color', '#111827');
      root.style.setProperty('--secondary-text', '#6b7280');
      root.style.setProperty('--border-color', '#e5e7eb');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--navbar-bg', '#ffffff');
      root.style.setProperty('--footer-bg', '#E8FFEC');
      root.style.setProperty('--success-color', '#16a34a');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};