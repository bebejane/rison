import styles from "./OurOffer.module.scss";
import {  Markdown, SectionFollow, Button, SectionImageHeadline } from "/components/common";
import { apiQuery } from "/lib/api";
import { GetOurOffer, GetMenu, GetContact } from "/graphql";
import { Image } from 'react-datocms';

export default function OurOffer({ page, contact, menu }) {
	const { intro, blocks } = page;

	return (
		<>
			<section className={styles.intro}>
				<h2>{page.intro}</h2>
			</section>
			<SectionFollow blocks={page.blocks} />
		</>
	);
}

export async function getStaticProps({ preview }) {
	const queries = [GetOurOffer, GetMenu, GetContact];
	const data = await apiQuery(queries, {}, preview);
	return { props: { ...data }, revalidate: parseInt(process.env.REVALIDATE_TIME) };
}