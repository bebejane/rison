import React from "react";
import styles from './SectionManagement.module.scss'
import SectionManagementBlock from "/components/common/SectionManagementBlock";
import { Image } from 'react-datocms';

const SectionManagement = ({ blocks }) => (
  <section className={styles.section}>
  {blocks.map((block, idx)=>
  <SectionManagementBlock block={block} key={idx}/>
  )}
</section>

);

export default SectionManagement;
