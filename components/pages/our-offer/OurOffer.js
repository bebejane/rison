import Content from "/components/common/Content";
import styles from './OurOffer.module.scss'

export default function OurOffer({page, contact, menu}) {
	return (
		<Content page={page} contact={contact} menu={menu}>
      Our offer content
			{contact.headline}
		</Content>
	);
}
