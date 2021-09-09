import Head from "next/head";
import Content from "../components/common/Content";
import menuController from "../controller/menu";
import pageController from "../controller/page";
import styles from './index.module.scss'
import { Image } from 'react-datocms';

export default function Home({menu, page}) {
  console.log(page)
  return (
    <>
      <Head>
        <title>Rison | {page.titel}</title>
        <meta name="description" content=""/>
      </Head>
      <Content menu={menu}>
        <h1 className={styles['intro-header']}>
          Hello, we are Rison
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

export async function getStaticProps(context) {
  const menu = await menuController.all();
  const page = await pageController.get('start');
  return { 
    props: {
      menu,
      page
    },
    revalidate:10
  }
}