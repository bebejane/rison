import Content from "../../components/common/Content";
import {menuController, homeController, contactController} from "../../controllers";
import styles from '../index.module.scss'
import { Image } from 'react-datocms';

export default function Home({page, contact, menu}) {
  
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
  const page = await homeController.get('home', preview);
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