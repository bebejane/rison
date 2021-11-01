import React from "react";
import styles from './SectionManagementBlock.module.scss'
import { Image } from 'react-datocms';
import Reveal from "components/fx/Reveal";

const SectionManagementBlock = ({ block, odd }) => (
  <div className={styles.people}>
      <figure>
        {block.image && <Image lazyLoad={false} data={block.image.responsiveImage} />}
      </figure>
      <Reveal effect="fadeUp" delay={!odd ? 300 : 0}>
        <article>
          <p><strong>{block.name}</strong></p>
          <p>{block.title}</p>
          <p><a href={'mailto:' + block.email}>{block.email}</a></p>
          <p>{block.text}</p>
        </article>
      </Reveal>
  </div>
);

export default SectionManagementBlock;
