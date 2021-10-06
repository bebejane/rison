import styles from "./Test.module.scss";
import { apiQuery } from "/lib/api";
import GetTest from "./test.graphql";
import Head from 'next/head'

export default function Test(data) {
  return (
		<>
		<Head>
			<title>testar</title>
		</Head>
		<div className={styles.container}>
			<table className={styles.seoTable}>
      {data.seo.tags.map(({tag, content, attributes})=>
				<tr><td>{tag}</td><td>{attributes && `${attributes.property || attributes.name}`}</td><td>{attributes ? `${attributes.content}` : content }</td></tr>
			)}
			</table>
		</div>
		</>
	);	
}

export async function getStaticProps({ preview }) {
  const queries = [GetTest];
  const data = await apiQuery(queries, {}, preview);

	return { props: { ...data }, revalidate: parseInt(process.env.REVALIDATE_TIME)};
}
