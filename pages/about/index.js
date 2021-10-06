import styles from "./About.module.scss";
import { Content, Markdown, SectionFollow, Button, SectionImageHeadline } from "/components/common";
import { apiQuery } from "/lib/api";
import { GetAbout, GetMenu, GetContact } from "/graphql";
import { useRef } from "react";
import { useUI, UIAction } from "/lib/context/ui";

export default function About({page, contact, menu}) {
	const { intro, people } = page;

	return (
    <section className={styles.intro}>
    <h2>{page.intro}</h2>
  </section>
	);
}

export async function getStaticProps({ preview }) {
  const queries = [GetAbout,GetMenu, GetContact];
  const data = await apiQuery(queries, {}, preview);
	return { props: { ...data }, revalidate: parseInt(process.env.REVALIDATE_TIME) };
}