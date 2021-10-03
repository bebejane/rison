import styles from "./Invest.module.scss";
import { Markdown, SectionFollow, Button, SectionImageHeadline } from "/components/common";
import { apiQuery } from "/lib/api";
import { GetHome, GetMenu, GetContact } from "/graphql";
import { useRef } from "react";
import { useUI, UIAction } from "/lib/context/ui";
import { REVALIDATE_TIME } from "/lib/utils/constant"

export default function Invest({page, contact, menu}) {
	return (
    <h2>Invest content</h2>
	);
}

export async function getStaticProps({ preview }) {
  const queries = [GetMenu, GetContact];
  const data = await apiQuery(queries, {}, preview);
	return { props: { ...data }, revalidate: REVALIDATE_TIME };
}