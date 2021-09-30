import React from "react";
import styles from './SectionFollow.module.scss'
import SectionFollowBlock from "/components/common/SectionFollowBlock";
import { Image } from 'react-datocms';


const SectionFollow = ({ blocks }) => (
  <section className={styles.section}>
  {blocks.map((block, idx)=>
  <SectionFollowBlock block={block} key={idx}/>
  )}
</section>
);

export default SectionFollow;
