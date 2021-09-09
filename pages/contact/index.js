import Head from "next/head";
import React from "react";
import Content from "../../components/common/Content";
import menuController from "../../controllers/menu";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Rison | Contact</title>
        <meta name="description" content=""/>
      </Head>
      <Content>
        Contact
      </Content>
    </>
  )
}