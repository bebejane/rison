import styles from "./Partner.module.scss";
import { REVALIDATE_TIME } from "/lib/utils/constant"
import { Content, Markdown, SectionFollow, Button, SectionImageHeadline } from "/components/common";
import { apiQuery } from "/lib/api";
import { GetHome, GetMenu, GetContact } from "/graphql";
import { useRef } from "react";
import { useUI, UIAction } from "/lib/context/ui";


export default function Partner({page, contact, menu}) {
	return (
    <h2>Partner content</h2>
	);
}

export async function getStaticProps({ preview }) {
  const queries = [GetMenu, GetContact];
  const data = await apiQuery(queries, {}, preview);
	return { props: { ...data }, revalidate: REVALIDATE_TIME };
}