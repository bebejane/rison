import Head from "next/head";
import React from "react";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import menuController from "../lib/controller/menu";

export default function Home({menu}) {
  
  return (
    <>
      <Head>
        <title>Rison</title>
        <meta name="description" content=""/>
      </Head>
      <NavBar menu={menu}/>
      <Footer />
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