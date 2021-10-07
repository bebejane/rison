import React from "react";
import styles from './SectionIntroSplit.module.scss'

const SectionIntroSplit = ({ intro, headline }) => {
  return (
    <section className={styles.intro}>
      <h1>{headline}</h1>
      <p className={'big'}>{intro}</p>
    </section>
  )
}
export default SectionIntroSplit;
