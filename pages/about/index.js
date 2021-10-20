import styles from "./About.module.scss";
import { withGlobalProps } from "/lib/utils";
import { Markdown, SectionManagement, SectionCTA, SectionIntro, Button } from "/components/common";
import { GetAbout } from "/graphql";

export default function About({ page, contact, menu }) {
  const { intro, people } = page;

  return (
    <>
      <SectionIntro intro={page.intro} headline={page.headline} longerText={page.longerText} />
      <section className={styles.team}>
        <div className={styles.wrapper}>
          <div className={styles.people}>
            <h2>{page.aboutManagement}</h2>
            <SectionManagement blocks={page.people} />
          </div>
        </div>
      </section>
      <SectionCTA text={page.cta} />
    </>
  );
}

export const getStaticProps = withGlobalProps({ query: GetAbout, model: "about" });