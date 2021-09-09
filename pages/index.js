import Head from "next/head";
import Content from "../components/common/Content";
import {menuController, pageController, contactController} from "../controller";
import styles from './index.module.scss'
import { Image } from 'react-datocms';

export default function Home({page, contact, menu}) {
  
  return (
    <Content page={page} contact={contact} menu={menu}>
      <div className={styles.container}>        
        <div className={styles.intro}>
          <div className={styles.introWrap}>
            <h1 className={styles['intro-header']}>
              Hello, we are Rison.
            </h1>
            {page.intro}
          </div>
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
      </div>
    </Content>
  )
}

export async function getStaticProps(context) {
  const page = await pageController.get('start');
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