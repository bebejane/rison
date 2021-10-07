import styles from "./Partner.module.scss";
import { Markdown, SectionIntroSplit, SectionIntro, SectionWho, SectionCTA } from "/components/common";
import { apiQuery } from "/lib/api";
import { GetPartner, GetMenu, GetContact } from "/graphql";
import { useRef } from "react";
import { useUI, UIAction } from "/lib/context/ui";


export default function Partner({ page, contact, menu }) {
  const { intro, headline } = page;

  return (
    <>
      <SectionIntro intro={page.intro} headline={page.headline} />
      <SectionWho blocks={page.whoAreYou} />
      <SectionCTA text={page.cta} />
    </>
  );
}

export async function getStaticProps({ preview }) {
  const queries = [GetPartner, GetMenu, GetContact];
  const data = await apiQuery(queries, {}, preview);
  return { props: { ...data }, revalidate: parseInt(process.env.REVALIDATE_TIME) };
}