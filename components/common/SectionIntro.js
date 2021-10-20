import React from "react";
import styles from './SectionIntro.module.scss'
import Markdown from '/components/common';

const SectionIntro = ({ intro, headline, longerText, arrow }) => {
  return (
    <section className={styles.intro}>
      <div className={styles.wrapper}>
        <h2>{headline}</h2>
        <h2><Markdown>{intro}</Markdown></h2>
        {longerText && <p className={styles.longer}>{longerText}</p>}
        {arrow &&
          <div className={styles.howItWorks}>
            <h3>This is how we do it</h3>
            <h3 className={styles.scrollArrow} >
              ↓
            </h3>
          </div>
        }
      </div >
    </section>
  )
}
export default SectionIntro;
