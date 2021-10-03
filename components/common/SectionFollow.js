import React from "react";
import styles from './SectionFollow.module.scss'
import SectionFollowBlock from "/components/common/SectionFollowBlock";
import { Image } from 'react-datocms';

const SectionFollow = React.forwardRef(({blocks}, ref) => (  
  <section className={styles.section} ref={ref}>
    {blocks.map((block, idx)=>
      <SectionFollowBlock block={block} key={idx} odd={idx % 2 == 0}/>
    )}
  </section>
));

export default SectionFollow;
