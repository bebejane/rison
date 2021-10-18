import React from "react";
import styles from './SectionManagementBlock.module.scss'
import { Image } from 'react-datocms';


const SectionManagementBlock = ({ block }) => (
  <div className={styles.people}>
    <figure>
      {block.image && <Image lazyLoad={false} data={block.image.responsiveImage} />}
    </figure>
    <article>
      <p><strong>{block.name}</strong></p>
      <p>{block.title}</p>
      <p><a href={'mailto:' + block.email}>{block.email}</a></p>
      <p>{block.text}</p>
    </article>
  </div>
);

export default SectionManagementBlock;
