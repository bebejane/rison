import styles from "./Test.module.scss";
import { apiQuery } from "/lib/api";
import { GetHome, GetMenu, GetContact } from "/graphql";

export default function Test(data) {
  //console.log(data)
	return (
		<div className={styles.container}>
      test
		</div>
	);
}

export async function getStaticProps({ preview }) {
  const queries = [GetHome, GetMenu, GetContact];
  const data = await apiQuery(queries, {}, preview);
	return { props: { ...data }, revalidate: parseInt(process.env.REVALIDATE_TIME)};
}
