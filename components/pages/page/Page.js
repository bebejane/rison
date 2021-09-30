import Content from "/components/common/Content";
import styles from './Page.module.scss'

export default function Page({page, contact, menu}) {  
  if(!page) return null
  
  return (
    <Content page={page} contact={contact} menu={menu}>
      <h2 className={styles['intro-header']}>
        {page.title}
      </h2>
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