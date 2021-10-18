import React from "react";
import styles from './SectionIntro.module.scss'
import ReactMarkdown from "react-markdown";


const SectionIntro = ({ intro, headline }) => {
  return (
    <section className={styles.intro}>
      <div className={styles.wrapper}>
        <h2>{headline}</h2>
        <h2><ReactMarkdown>{intro}</ReactMarkdown></h2>
      </div >
    </section>
  )
}
export default SectionIntro;
