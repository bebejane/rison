import React from "react";
import styles from './SectionManagementBlock.module.scss'
import { Image } from 'react-datocms';


const SectionManagementBlock = ({ block }) => (
  <div className={styles.myDiv}>
    <article>
      <h2>{block.shortHeadline}</h2>
      <h2>{block.bigHeadline}</h2>
    </article>
    <figure>
      {block.image && <Image data={block.image.responsiveImage} />}
    </figure>
  </div>
);

export default SectionManagementBlock;
