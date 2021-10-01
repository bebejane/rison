import Content from "/components/common/Content";
import styles from './OurOffer.module.scss'
import { Image } from "react-datocms";
import SectionFollow from "/components/common/SectionFollow";
export default function OurOffer({page, contact, menu}) {
	const {intro, blocks} = page;
	
	return (
		<Content page={page} contact={contact} menu={menu}>
      {page.intro}
			<SectionFollow blocks={page.blocks}/>
		</Content>
	);
}
