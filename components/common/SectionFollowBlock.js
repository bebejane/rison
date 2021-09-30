import React from "react";
import styles from './SectionFollowBlock.module.scss'
import { Image } from 'react-datocms';


const SectionFollowBlock = ({ block }) => (
  <div className={styles.myDiv}>
    <article>
      <h2 className={'tight'}>{block.headline}</h2>
      <h2 className={'tight'}>{block.bigHeadline}</h2>
      <p>{block.desc}</p>
    </article>
    <figure>
      {block.image && <Image data={block.image.responsiveImage} />}
    </figure>
  </div>
);

export default SectionFollowBlock;
