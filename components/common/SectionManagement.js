import React from "react";
import styles from './SectionManagement.module.scss'
import SectionManagementBlock from "/components/common/SectionManagementBlock";
import { Image } from 'react-datocms';

const SectionManagement = ({ blocks }) => (
  <div className={styles.team}>
    {blocks.map((block, idx) =>
      <SectionManagementBlock block={block} key={idx} />
    )}
  </div>
);

export default SectionManagement;
