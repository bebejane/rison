import Head from "next/head";
import React from "react";
import Content from "../components/common/Content";
import menuController from "../controllers/menu";
import pageController from "../controllers/page";

export default function OurOffer({slug, title}) {
  return (
    <>
      <Head>
        <title>Rison | {title}</title>
        <meta name="description" content=""/>
      </Head>
      <Content>
        Dynamic {slug}
      </Content>
    </>
  )
}
export async function getStaticPaths() {
  const menu = await menuController.all()
  const paths = menu.map((m)=>{ return {params:{slug:[m.slug]}}})
  paths.forEach(p => console.log(p))
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const {slug} = params
  const {page} = pageController.get(slug[0]);
  return {
    props: {
      slug   
    }
  }
}