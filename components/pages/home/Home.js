import Content from "/components/common/Content";
import SectionFollow from "/components/common/SectionFollow";
import SectionImageHeadline from "/components/common/SectionImageHeadline";
import styles from './Home.module.scss'
import { Image } from 'react-datocms';
import Button from '/components/common/Button'


export default function Home({page, contact, menu}) {  
  
  return (
    <Content page={page} contact={contact} menu={menu}>
      <div className={styles.container}>        
        <div className={styles.intro}>
          <div className={styles.introWrap}>
            <h2 className={styles['intro-header']}>
              {page.header}
            {page.intro}
            </h2>
          </div>
        </div>
        <SectionFollow blocks={page.blocks}/>
        <SectionImageHeadline blocks={page.sectionWebapp}/>
        </div>
    </Content>
  )
}
