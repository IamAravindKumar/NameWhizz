import React, { useState } from "react";
import Accordion from "../Accordion";
import styles from "./AccordionGroup.module.scss";

type AccordionList = { title: string; render: React.ReactNode };

interface AccordionGroupProps {
  accordionList: AccordionList[];
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ accordionList }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionToggle = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <div className={styles.accordionGroupWrapper}>
      {accordionList.map(({ title, render }) => (
        <Accordion
          key={title}
          title={title}
          isOpen={openAccordion === title}
          onToggle={handleAccordionToggle}
        >
          {render}
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionGroup;
