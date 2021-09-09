import Head from "next/head";
import React from "react";
import Content from "../components/common/Content";
import menuController from "../lib/controller/menu";

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
  console.log('run staticProps')
  const menu = await menuController.get();
  return { 
    props: {
      menu
    },
    revalidate:10
  }
}