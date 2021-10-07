import styles from "./OurOffer.module.scss";
import { Markdown, SectionFollow, SectionIntro, Button, SectionImageHeadline } from "/components/common";
import { withGlobalProps } from "/lib/utils";
import { GetOurOffer } from "/graphql";
import { Image } from 'react-datocms';

export default function OurOffer({ page, contact, menu }) {
	const { intro, blocks } = page;

	return (
		<>
			<SectionIntro intro={page.intro} />
			<SectionFollow blocks={page.blocks} />
		</>
	);
}

export const getStaticProps = withGlobalProps({query: GetOurOffer, model: "partner"});