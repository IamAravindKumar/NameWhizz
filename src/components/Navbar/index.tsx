import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '@/assets/transparent_dark_logo.png';
import LightLogo from '@/assets/transparent_light_logo.png';
import { useTheme } from "@/hooks/useTheme.tsx";
import styles from './Navbar.module.scss';

interface NavbarProps {
    toggleSidenav: () => void;
    isSidenavOpen: boolean;
  }

const Navbar: React.FC<NavbarProps>= ({ toggleSidenav, isSidenavOpen }) => {
    const { theme } = useTheme();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={theme === "light" ? LightLogo : Logo} alt="Logo" />
      </div>
      <div className={styles.hamburger} onClick={toggleSidenav}>
        {isSidenavOpen ? <FaTimes />: <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;