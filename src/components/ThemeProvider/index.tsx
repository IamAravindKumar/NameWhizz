import React, { useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface ThemeProviderProps {
    children: React.ReactNode;
  }

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState("dark");
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };