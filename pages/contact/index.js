import React from "react";
import Content from "/components/common/Content";
import {contactController } from "/controllers";
import ReactMarkdown from "react-markdown";

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

export async function getStaticProps({preview}) {
  const data = await contactController.get(preview);
  return { props: {...data}, revalidate:10 }
}