'use client'
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // React Icons for Sun and Moon

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 sm:p-2.5 bg-greenish dark:bg-white rounded-xl flex items-center justify-center"
    >
      {theme === 'light' ? (
        <FaMoon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
      ) : (
        <FaSun className="text-black sm:w-5 sm:h-5 w-4 h-4" />
      )}
    </button>
  );
}

