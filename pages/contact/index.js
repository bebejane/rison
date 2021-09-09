import Head from "next/head";
import React from "react";
import Content from "../../components/common/Content";
import contactController from "../../controller/contact";
import ReactMarkdown from 'react-markdown'

export default function Contact({contact}) {
  console.log(contact)
  return (
    <>
      <Head>
        <title>Rison | Contact</title>
        <meta name="description" content=""/>
      </Head>
      <Content>
        {contact.headline}<br/>
        <ReactMarkdown>{contact.text}</ReactMarkdown>
        {contact.address}<br/>
        
        {contact.facebook}<br/>

      </Content>
    </>
  )
}

export async function getStaticProps({ params }) {
  const contact = await contactController.get();
  return {
    props: {
      contact
    }
  }
}