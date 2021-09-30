import Content from "/components/common/Content";
import Markdown from "/components/common/Markdown";
import SectionFollow from "/components/common/SectionFollow";
import SectionImageHeadline from "/components/common/SectionImageHeadline";
import styles from './Home.module.scss'
import { Image } from 'react-datocms';

export default function Home({ page, contact, menu }) {

  return (
    <Content page={page} contact={contact} menu={menu}>
      <div className={styles.container}>
        <section className={styles.intro}>
          <div>
            <h2 className={styles['intro-header']}>
              {page.header}
            </h2>
            <h2>
              {page.intro}
            </h2>
          </div>
          <div>
            <h3>This is how it works</h3>
            <h3>→</h3>
          </div>
        </section>
        <SectionFollow blocks={page.blocks} />
        <SectionImageHeadline blocks={page.sectionWebapp} />
        <section className={styles.outro}>
          <h2>
            <Markdown>{page.ctaText}</Markdown>
          </h2>
          <p>
            <Markdown>{page.readMoreText}</Markdown>
          </p>
        </section>
      </div>
    </Content>
  )
}
