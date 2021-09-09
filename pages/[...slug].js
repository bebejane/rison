import Head from "next/head";
import React from "react";
import Content from "../components/common/Content";
import menuController from "../controllers/menu";
import pageController from "../controllers/page";
import fs from 'fs'

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
  const dirs = fs.readdirSync(`${process.cwd()}/pages`, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)
  const paths = menu.filter(m => !dirs.includes(m.slug)).map((m)=>{ return {params:{slug:[m.slug]}}})
  
  return {
    paths,
    fallback: 'blocking'
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