import styles from "./About.module.scss";
import { Markdown, SectionManagement, SectionIntro, Button } from "/components/common";
import { GetAbout } from "/graphql";
import { withGlobalProps } from "/lib/utils";

export default function About({ page, contact, menu }) {
  const { intro, people } = page;

  return (
    <>
      <SectionIntro intro={page.intro} headline={page.headline} />
      <section className={styles.team}>
        <div className={styles.wrapper}>
          <h3>Team</h3>
          <div className={styles.people}>
            <h2>{page.aboutManagement}</h2>
            <SectionManagement blocks={page.people} />
          </div>
        </div>
      </section>

    </>
  );
}

export const getStaticProps = withGlobalProps({ query: GetAbout, model: "about" });