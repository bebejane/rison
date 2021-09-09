import Head from "next/head";
import fs from 'fs'
import Content from "../components/common/Content";
import {menuController, pageController, contactController} from "../controller";
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
            {block.headline}
            {block.image && 
              <Image data={block.image.responsiveImage} />
            }
          </div>
        )}
      </div>
    </Content>
  )
}

export async function getStaticProps({params}) {
  const slug = params.slug[0]
  const page = await pageController.get(slug);
  const contact = await contactController.get();
  const menu = await menuController.all();
  
  return { 
    props: {
      page,
      contact,
      menu
    },
    revalidate:10
  }
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

