import React from "react";
import styles from './SectionWho.module.scss'
import SectionWhoBlock from "/components/common/SectionWhoBlock";
import { Image } from 'react-datocms';

const SectionWho = React.forwardRef(({ blocks }, ref) => (
  <section className={styles.section} ref={ref}>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3>Who are you?</h3>
        {blocks.map((block, idx) =>
          <SectionWhoBlock block={block} key={idx} index={idx} />
        )}
      </div>
    </div>
  </section>
));

export default SectionWho;
