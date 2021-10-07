import styles from "./About.module.scss";
import { Content, Markdown, SectionManagement, SectionIntro, Button } from "/components/common";
import { apiQuery } from "/lib/api";
import { GetAbout, GetMenu, GetContact } from "/graphql";
import { useRef } from "react";
import { useUI, UIAction } from "/lib/context/ui";

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

export async function getStaticProps({ preview }) {
  const queries = [GetAbout, GetMenu, GetContact];
  const data = await apiQuery(queries, {}, preview);
  return { props: { ...data }, revalidate: parseInt(process.env.REVALIDATE_TIME) };
}