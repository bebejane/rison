import Content from "/components/common/Content";
import Markdown from "/components/common/Markdown";
import SectionFollow from "/components/common/SectionFollow";
import Button from "/components/common/Button";
import SectionImageHeadline from "/components/common/SectionImageHeadline";
import styles from './Home.module.scss'
import {useRef} from 'react';
import {useUI, UIAction} from '/lib/context/ui';

export default function Home({ page, contact, menu }) {
  const [ui, setUI] = useUI()
  const contentRef =  useRef()
  const scrollRef =  useRef()
  const handleScrollDown = () => scrollRef.current.scrollIntoView({behavior:'smooth'})

  return (
    <Content page={page} contact={contact} menu={menu} ref={contentRef}>
      <div className={styles.container}>
        <section className={styles.intro}>
          <div className={styles.wrapper}>
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
              <h3 className={styles.scrollArrow} onClick={handleScrollDown}>→</h3>
            </div>
          </div>
        </section>
        <SectionFollow blocks={page.blocks} ref={scrollRef}/>
        <SectionImageHeadline blocks={page.sectionWebapp} />
        <section className={styles.outro}>
          <div className={styles.wrapper}>
            <h2>
              <Markdown>{page.ctaText}</Markdown>
            </h2>
            <Button label={'Contact us'} onClick={()=>setUI({type:UIAction.SHOW_CONTACT})}/>
            <p>
              <Markdown>{page.readMoreText}</Markdown>
            </p>
          </div>
        </section>
      </div>
    </Content>
  )
}
