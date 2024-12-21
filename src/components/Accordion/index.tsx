import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './Accordion.module.scss';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: (title: string) => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, isOpen, onToggle }) => {
  const [height, setHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={() => onToggle(title)}>
        <h3>{title}</h3>
        <div className={styles.icon}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {<div ref={contentRef} className={`${styles.accordionContent} ${isOpen ? styles.open : "" }`} style={{ height }}>
        <div className={styles.accordionContentWrapper}>{children}</div>
        </div>}
    </div>
  );
};

export default Accordion;