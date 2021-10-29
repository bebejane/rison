import React from "react";
import styles from './SectionIntro.module.scss'
import { Markdown } from '/components/common';

const SectionIntro = ({ intro, headline, longerText }) => {
  return (
    <section className={styles.intro}>
      <div className={styles.wrapper}>
        <h2>{headline}</h2>
        <h2><Markdown>{intro}</Markdown></h2>
        {longerText && <p className={styles.longer}>{longerText}</p>}
      </div >
    </section>
  )
}
export default SectionIntro;
