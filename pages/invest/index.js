import styles from "./Invest.module.scss";
import { Content, Markdown, SectionFollow, Button, SectionImageHeadline } from "/components/common";
import { apiQuery } from "/lib/api";
import { GetHome, GetMenu, GetContact } from "/graphql";
import { useRef } from "react";
import { useUI, UIAction } from "/lib/context/ui";

export default function Invest({page, contact, menu}) {
	return (
		<Content page={page} contact={contact} menu={menu}>
      <h2>Invest content</h2>
		</Content>
	);
}

export async function getStaticProps({ preview }) {
  const queries = [GetMenu, GetContact];
  const data = await apiQuery(queries, {}, preview);
	return { props: { ...data }, revalidate: 10 };
}