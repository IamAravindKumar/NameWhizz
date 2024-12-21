import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import Workarea from './components/Workarea';
import Configpane from './components/Configpane';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import styles from "./App.module.scss";

function App() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <div className={`${styles.container} ${isSidenavOpen ? styles.sidenavOpen : ''}`}>
      <Navbar toggleSidenav={toggleSidenav} isSidenavOpen={isSidenavOpen} />
      <Workarea isSidenavOpen={isSidenavOpen}/>
      <Configpane isSidenavOpen={isSidenavOpen} />
      <Footer />
    </div>
  );
}

export default App;
