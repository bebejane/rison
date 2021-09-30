import Content from "/components/common/Content";
import ReactMarkdown from "react-markdown";
import styles from './Contact.module.scss'

export default function Contact({page, contact, menu}) {
	return (
		<Content page={page} contact={contact} menu={menu}>
			{contact.headline_general}
			<br />!!!
			<h1>
			<ReactMarkdown>{contact.text_text}</ReactMarkdown>
			</h1>
			{contact.address}
			<br />
			{contact.facebook}
			<br />
		</Content>
	);
}
