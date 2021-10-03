import {useState} from "react";
import styles from './SectionFollowBlock.module.scss'
import { Image } from 'react-datocms';
import Markdown from "/components/common/Markdown";
import useVisibility from "/lib/hooks/useVisibility"

const SectionFollowBlock = ({ block, odd }) => {

  /* Slide in Animation
  const [ref, ratio] =  useVisibility()
  const x = Math.min((ratio - 0.3) * 100, 0)
  const scrollStyle = {transform:`translateX(${odd ? x : Math.abs(x)}%)`}
  */

  return (
    <div className={styles.myDiv} >
      <article>
        <h3 className={'tight'}>{block.shortHeadline}</h3>
        <h2 className={'tight'}>{block.headline}</h2>
        <p><Markdown>{block.text}</Markdown></p>
      </article>
      <figure>
        {block.image && <Image data={block.image.responsiveImage} />}
      </figure>
    </div>
  );
}

export default SectionFollowBlock;
