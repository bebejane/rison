import styles from "./Invest.module.scss";
import { Button, SectionIntroSplit, SectionIntro, SectionWho, SectionCTA } from "/components/common";
import { apiQuery } from "/lib/api";
import { GetInvest, GetMenu, GetContact } from "/graphql";
import { useRef } from "react";
import { useUI, UIAction } from "/lib/context/ui";

export default function Invest({ page, contact, menu }) {
  const { intro, headline } = page;

  return (
    <>
      <SectionIntro intro={page.intro} />
      <SectionWho blocks={page.whoAreYou} />
      <SectionCTA text={page.cta} />
    </>
  );
}

export async function getStaticProps({ preview }) {
  const queries = [GetInvest, GetMenu, GetContact];
  const data = await apiQuery(queries, {}, preview);
  return { props: { ...data }, revalidate: parseInt(process.env.REVALIDATE_TIME) };
}