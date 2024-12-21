import React from "react";
import AccordionGroup from "../AccordionGroup";
import ThemeSelector from "../ThemeSelector";
import styles from "./Configpane.module.scss";

interface ConfigpaneProps {
  isSidenavOpen: boolean;
}
const accordionList = [
  {
    title: "Theming",
    render: <ThemeSelector />,
  },
  {
    title: "Random Picker Configuration",
    render: <p>Random Picker settings</p>,
  },
  {
    title: "Inputs",
    render: <p>Input Settings</p>,
  },
  {
    title: "Exports",
    render: <p>Exports Settings</p>,
  },
];

const Configpane: React.FC<ConfigpaneProps> = ({ isSidenavOpen }) => {
  return (
    <aside className={`${styles.sidenav} ${isSidenavOpen ? styles.open : ""}`}>
      <AccordionGroup accordionList={accordionList} />
    </aside>
  );
};

export default Configpane;
