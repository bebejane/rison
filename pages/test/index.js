import styles from "./Test.module.scss";
import DatoSEO from "/lib/dato/seo";
import { GetTest } from "./test.graphql";
import { SEOQuery } from "/graphql";
import { withGlobalProps } from "/lib/utils";

export default function Test(data) {
	const { seo } = data;

	return (
		<>
			<DatoSEO {...data} title={"Rison -- SEO test"} />
			<div className={styles.container}>
				<table className={styles.seoTable}>
					{seo.tags.map(({ tag, content, attributes }, idx) => (
						<tr key={idx}>
							<td>{tag}</td>
							<td>{attributes && `${attributes.property || attributes.name}`}</td>
							<td>{attributes ? `${attributes.content}` : content}</td>
						</tr>
					))}
				</table>
			</div>
		</>
	);
}

export const getStaticProps = withGlobalProps([GetTest, SEOQuery("test")]);
