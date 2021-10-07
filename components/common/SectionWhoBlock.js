import {useState} from "react";
import styles from './SectionWhoBlock.module.scss'
import { Image } from 'react-datocms';
import Markdown from "/components/common/Markdown";
import useVisibility from "/lib/hooks/useVisibility"

const SectionWhoBlock = ({ block, odd }) => {
  return (
    <div className={styles.who} >
      <figure>
        {block.image && <Image data={block.image.responsiveImage} />}
      </figure>
      <article>
        <p>{block.headline}</p>
        <Markdown>{block.text}</Markdown>
      </article>
    </div>
  );
}

export default SectionWhoBlock;
