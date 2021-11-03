import React from "react";
import styles from './SectionManagement.module.scss'
import SectionManagementBlock from "/components/common/SectionManagementBlock";

const SectionManagement = ({ blocks }) => (
  <div className={styles.team}>
    {blocks.map((block, idx) =>
      <SectionManagementBlock block={block} key={idx} odd={idx % 2 === 0}/>
    )}
  </div>
);

export default SectionManagement;
