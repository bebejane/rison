import styles from "./Test.module.scss";
import { apiQuery } from "/lib/api";
import GetTest from "./test.graphql";
import {SEOQuery} from "/graphql";
import DatoSEO from "/lib/dato/seo";
import withGlobalProps from "lib/utils/withGlobalProps";

export default function Test({seo, site, pathname}) {
  return (
		<>
			<div className={styles.container}>
				<table className={styles.seoTable}>
				{seo.tags.map(({tag, content, attributes})=>
					<tr><td>{tag}</td><td>{attributes && `${attributes.property || attributes.name}`}</td><td>{attributes ? `${attributes.content}` : content }</td></tr>
				)}
				</table>
			</div>
		</>
	);	
}

export const getStaticProps = withGlobalProps([GetTest, SEOQuery("home")])
