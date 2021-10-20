import styles from "./OurOffer.module.scss";
import { withGlobalProps } from "/lib/utils";
import { Markdown, SectionFollow, SectionIntro, SectionCTA, Button, SectionImageHeadline } from "/components/common";
import { GetOurOffer } from "/graphql";
import { Image } from 'react-datocms';


export default function OurOffer({ page, contact, menu }) {
	const { intro, blocks } = page;

	return (
		<>
			<SectionIntro intro={page.intro} headline={page.headline} arrow={true} />
			<SectionFollow blocks={page.blocks} />
			<SectionCTA text={page.cta} />
		</>
	);
}

export const getStaticProps = withGlobalProps({ query: GetOurOffer, model: "ourOffer" });