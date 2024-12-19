import React from "react";
import styles from "./Configpane.module.scss";

interface ConfigpaneProps {
    isSidenavOpen: boolean;
  }
const Configpane: React.FC<ConfigpaneProps> = ({isSidenavOpen}) => {
  return (
    <aside className={`${styles.sidenav} ${isSidenavOpen ? styles.open : ''}`}>
      <p>Sidenav content goes here</p>
    </aside>
  );
};

export default Configpane;
