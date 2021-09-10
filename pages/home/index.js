import Content from "../../components/common/Content";
import {homeController} from "../../controllers";
import styles from '../index.module.scss'
import { Image } from 'react-datocms';

export default function Home({page, contact, menu}) {
  console.log(page);
  return (
    <Content page={page} contact={contact} menu={menu}>
      <div className={styles.container}>        
        <div className={styles.intro}>
          <div className={styles.introWrap}>
            <h1 className={styles['intro-header']}>
              {page.header}
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

export async function getStaticProps({preview}) {
  const data = await homeController.get(preview)
  return { 
    props: {
      ...data
    },
    revalidate:10
  }
}