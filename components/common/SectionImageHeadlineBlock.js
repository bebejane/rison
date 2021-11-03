import React from "react";
import styles from './SectionImageHeadlineBlock.module.scss'
import { Image } from 'react-datocms';

const SectionFollowBlock = ({ block }) => (
  <div className={styles.myDiv}>
    <article>
      <h2>{block.shortHeadline}</h2>
      <h2>{block.bigHeadline}</h2>
    </article>
    <figure>
      {block.image && <Image lazyLoad={false} data={block.image.responsiveImage} />}
    </figure>
  </div>
);

export default SectionFollowBlock;
