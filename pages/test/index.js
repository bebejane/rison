import styles from "./Test.module.scss";
import { apiQuery } from "/lib/api";
import { GetHome, GetMenu, GetContact } from "/graphql";
import { useRef } from "react";
import { useUI, UIAction } from "/lib/context/ui";
import { REVALIDATE_TIME } from "lib/utils/constant";

export default function Test(data) {
  console.log(data)
	const [ui, setUI] = useUI();
	return (
		<div className={styles.container}>
      test
		</div>
	);
}

export async function getStaticProps({ preview }) {
	
  const queries = [GetHomeSEO, GetMenu, GetContact];
  const data = await apiQuery(queries, {}, preview);
	return { props: { ...data }, revalidate: REVALIDATE_TIME };
}
