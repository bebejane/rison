import styles from "./About.module.scss";
import { Content, Markdown, SectionFollow, Button, SectionImageHeadline } from "/components/common";
import { apiQuery } from "/lib/api";
import { GetHome, GetMenu, GetContact } from "/graphql";
import { useRef } from "react";
import { useUI, UIAction } from "/lib/context/ui";

export default function About({page, contact, menu}) {
	return (
		<Content page={page} contact={contact} menu={menu}>
      About content
		</Content>
	);
}

export async function getStaticProps({ preview }) {
  const queries = [GetMenu, GetContact];
  const data = await apiQuery(queries, {}, preview);
	return { props: { ...data }, revalidate: 10 };
}