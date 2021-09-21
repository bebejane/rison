import Content from "/components/common/Content";
import ReactMarkdown from "react-markdown";
import styles from './Contact.module.scss'

export default function Contact({page, contact, menu}) {
	return (
		<Content page={page} contact={contact} menu={menu}>
			{contact.headline}
			<br />
			<ReactMarkdown>{contact.text}</ReactMarkdown>
			{contact.address}
			<br />
			{contact.facebook}
			<br />
		</Content>
	);
}
