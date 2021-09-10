import Head from "next/head";
import React from "react";
import Content from "../../components/common/Content";
import { contactController, pageController, menuController } from "../../controllers";
import ReactMarkdown from "react-markdown";

export default function Contact({page, contact, menu}) {
	
	return (
		<>
			<Content page={page} contact={contact} menu={menu}>
				{contact.headline}
				<br />
				<ReactMarkdown>{contact.text}</ReactMarkdown>
				{contact.address}
				<br />

				{contact.facebook}
				<br />
			</Content>
		</>
	);
}

export async function getStaticProps(context) {
  const page = await pageController.get('contact');
  const contact = await contactController.get();
  const menu = await menuController.all();

  return { 
    props: {
      page:contact,
      contact,
      menu
    },
    revalidate:10
  }
}