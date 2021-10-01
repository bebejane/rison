import styles from "./OurOffer.module.scss";
import { Content, Markdown, SectionFollow, Button, SectionImageHeadline } from "/components/common";
import { apiQuery } from "/lib/api";
import { GetOurOffer, GetMenu, GetContact } from "/graphql";
import { Image } from 'react-datocms';

export default function OurOffer({page, contact, menu}) {
	const {intro, blocks} = page;
	
	return (
		<Content page={page} contact={contact} menu={menu}>
      {page.intro}
			<SectionFollow blocks={page.blocks}/>
		</Content>
	);
}

export async function getStaticProps({ preview }) {
  const queries = [GetOurOffer, GetMenu, GetContact];
  const data = await apiQuery(queries, {}, preview);
	return { props: { ...data }, revalidate: 10 };
}