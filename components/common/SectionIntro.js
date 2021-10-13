import React from "react";
import styles from './SectionIntro.module.scss'
import ReactMarkdown from "react-markdown";


const SectionIntro = ({ intro, headline }) => {
  return (
    <section className={styles.intro}>
      <h2>{headline}</h2>
      <h2><ReactMarkdown>{intro}</ReactMarkdown></h2>
    </section>
  )
}
export default SectionIntro;
