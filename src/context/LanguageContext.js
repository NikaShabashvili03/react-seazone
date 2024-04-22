// LanguageContext.js

import React, { createContext, useState, useEffect } from 'react';

// Create a context for managing language state
export const LanguageContext = createContext();

// Custom hook for accessing language context
export const useLanguage = () => React.useContext(LanguageContext);

// Provider component to wrap your app and manage language state
export const LanguageProvider = ({ children }) => {
  // State to hold the current language
  const [language, setLanguage] = useState(() => {
    // Check if language is stored in local storage, if not use default language
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage ? storedLanguage : 'en'; // default language is 'en' (English)
  });

  // Function to update the language and store it in local storage
  const changeLanguage = (newLanguage) => {
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
  };

  // Listen for changes in language preference
  useEffect(() => {
    const handleStorageChange = () => {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage && storedLanguage !== language) {
        setLanguage(storedLanguage);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [language]);

  // Provide the language context to child components
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};