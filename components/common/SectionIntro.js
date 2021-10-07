import React from "react";
import styles from './SectionIntro.module.scss'

const SectionIntro = ({ intro }) => {
  return (
    <section className={styles.intro}>
      <h2>{intro}</h2>
    </section>
  )
}
export default SectionIntro;
