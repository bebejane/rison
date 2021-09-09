import Head from "next/head";
import React from "react";
import Content from "../components/common/Content";
import menuController from "../controllers/menu";

export default function Home({menu}) {
  return (
    <>
      <Head>
        <title>Rison</title>
        <meta name="description" content=""/>
      </Head>
      <Content menu={menu}>
        Content
      </Content>
    </>
  )
}

export async function getStaticProps(context) {
  const menu = await menuController.all();
  return { 
    props: {
      menu
    },
    revalidate:10
  }
}