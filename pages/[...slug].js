import Head from "next/head";
import fs from 'fs'
import Content from "../components/common/Content";
import menuController from "../controller/menu";
import pageController from "../controller/page";
import { Image } from 'react-datocms';
import styles from './index.module.scss'

export default function Page({slug, page}) {
  console.log(page)
  return (
    <>
      <Head>
        <title>Rison | {page.title}</title>
        <meta name="description" content={page.intro}/>
      </Head>
      <Content>
        <h1 className={styles['intro-header']}>
          {page.title}
        </h1>
        <div className={styles.intro}>
          {page.intro}
        </div>
        <div className={styles.sections}>
          {page.blocks.map((block)=>
            <div className={styles.section}>
              {block.headline}
              {block.image && 
                <Image data={block.image.responsiveImage} />
              }
            </div>
          )}
        </div>
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
  const page = await pageController.get(slug[0]);
  return {
    props: {
      slug,
      page: page || {}
    }
  }
}