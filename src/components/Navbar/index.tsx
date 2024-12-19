import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '@/assets/transparent_dark_logo.png';
import styles from './Navbar.module.scss';

interface NavbarProps {
    toggleSidenav: () => void;
  }

const Navbar: React.FC<NavbarProps>= ({ toggleSidenav }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.hamburger} onClick={toggleSidenav}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;