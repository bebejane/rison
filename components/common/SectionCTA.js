import React from "react";
import styles from './SectionCTA.module.scss'
import { Button } from "/components/common";
import { useUI, UIAction } from "/lib/context/ui";
import Reveal from "/components/fx/Reveal";

const SectionCTA = ({ text }) => {
  const [ui, setUI] = useUI();

  return (
    <section className={styles.outro}>
      <div className={styles.wrapper} >
        <Reveal effect="fadeUp" distance={20} duration={1000} fade={0.1}>
          <h2>{text}</h2>
        </Reveal>
        <Button label={"Contact us"} onClick={() => setUI({ type: UIAction.SHOW_CONTACT })} />
      </div>
    </section>
  )
}
export default SectionCTA;
