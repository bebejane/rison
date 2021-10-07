import React from "react";
import styles from './SectionCTA.module.scss'
import { Button } from "/components/common";
import { useUI, UIAction } from "/lib/context/ui";



const SectionCTA = ({ text }) => {
  const [ui, setUI] = useUI();

  return (
    <section className={styles.outro}>
      <h2>{text}</h2>
      <Button label={"Contact us"} onClick={() => setUI({ type: UIAction.SHOW_CONTACT })} />
    </section>
  )
}
export default SectionCTA;
