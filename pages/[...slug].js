import Head from "next/head";
import fs from 'fs'
import Content from "../components/common/Content";
import {menuController, pageController, contactController} from "../controllers";
import { Image } from 'react-datocms';
import styles from './index.module.scss'

export default function Page({page, contact, menu}) {

  return (
    <Content page={page} contact={contact} menu={menu}>
      <h1 className={styles['intro-header']}>
        {page.title}
      </h1>
      <div className={styles.intro}>
        {page.intro}
      </div>
      <div className={styles.sections}>
        {page.blocks.map((block, idx)=>
          <div key={idx} className={styles.section}>
            <p>{block.headline}</p>
            <p>{block.desc}</p>
            <p>{block.bigHeadline}</p>
            {block.image && <Image data={block.image.responsiveImage} />}
          </div>
        )}
      </div>
    </Content>
  )
}

export async function getStaticProps({params, preview}) {
  const slug = params.slug[0]
  const data = await pageController.get(slug, preview)
  
  return { 
    props: {
      ...data
    },
    revalidate:10
  }
}
export async function getStaticPaths() {
  
  const menu = await menuController.all()
  const dirs = fs.readdirSync(`${process.cwd()}/pages`, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)
  const paths = menu.filter(m => !dirs.includes(m.slug) && m.slug !== 'home').map((m)=>{ return {params:{slug:[m.slug]}}})
  return {
    paths,
    fallback: 'blocking'
  };
}

