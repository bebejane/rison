import Content from "/components/common/Content";
import styles from './About.module.scss'

export default function About({page, contact, menu}) {
	return (
		<Content page={page} contact={contact} menu={menu}>
      About content
		</Content>
	);
}
