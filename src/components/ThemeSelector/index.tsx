import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme.tsx";
import { THEMES } from "@/constant";
import styles from "./ThemeSelector.module.scss";

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (value: string ) => {
    if (value !== theme) {
      setTheme(value);
    }
  };

  return (
    <div className={styles.themeToggle}>
      {THEMES.map((currentTheme) => (
          <div
            className={styles.colorLabel}
            style={{ backgroundColor: currentTheme.code }}
            onClick={() => handleChange(currentTheme.value)}
            key={currentTheme.name}
          >
            {theme === currentTheme.value && <div className={styles.icon}><FaCheckCircle /></div>}
          </div>
      ))}
    </div>
  );
};

export default ThemeSelector;
