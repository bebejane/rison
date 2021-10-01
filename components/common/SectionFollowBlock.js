import React from "react";
import styles from './SectionFollowBlock.module.scss'
import { Image } from 'react-datocms';
import Markdown from "/components/common/Markdown";
import ReactMarkdown from "react-markdown";

const SectionFollowBlock = ({ block }) => (
  <div className={styles.myDiv}>
    <article>
      <h3 className={'tight'}>{block.shortHeadline}</h3>
      <h2 className={'tight'}>{block.headline}</h2>
      <p><ReactMarkdown>{block.text}</ReactMarkdown></p>
    </article>
    <figure>
      {block.image && <Image data={block.image.responsiveImage} />}
    </figure>
  </div>
);

export default SectionFollowBlock;
