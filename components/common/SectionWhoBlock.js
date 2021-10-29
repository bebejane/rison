import {useState} from "react";
import styles from './SectionWhoBlock.module.scss'
import { Image } from 'react-datocms';
import Markdown from "/components/common/Markdown";
import Reveal from "components/fx/Reveal";

const SectionWhoBlock = ({ block, odd }) => {
  return (    
      <div className={styles.who} >
        <Reveal effect="fadeUp">
          <figure>
            {block.image && <Image lazyLoad={false} data={block.image.responsiveImage} />}
          </figure>
          <article>
            <p>{block.headline}</p>
            <Markdown>{block.text}</Markdown>
          </article>
        </Reveal>
      </div>
  );
}

export default SectionWhoBlock;
