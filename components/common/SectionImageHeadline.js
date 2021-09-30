import React from "react";
import styles from './SectionImageHeadline.module.scss'
import SectionImageHeadlineBlock from "/components/common/SectionImageHeadlineBlock";
import { Image } from 'react-datocms';


const SectionImageHeadline = ({ blocks }) => (
  <section className={styles.section}>
  {blocks.map((block, idx)=>
  <SectionImageHeadlineBlock block={block} key={idx}/>
  )}
</section>
);

export default SectionImageHeadline;
