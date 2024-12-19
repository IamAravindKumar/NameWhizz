import React from 'react';
import styles from './Workarea.module.scss';

interface WorkareaProps {
  isSidenavOpen: boolean;
}
const Workarea: React.FC<WorkareaProps> = ({isSidenavOpen}) => {
    return (
        <main className={`${styles.main} ${isSidenavOpen ? styles.sidenavOpen : ''}`}>
        <p>Main content goes here</p>
      </main>
    );
};

export default Workarea;