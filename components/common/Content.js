import Head from 'next/head'
import styles from './Content.module.scss'
import classes from 'classnames'
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Content({page = {}, contact, menu, children}) {

  const contentStyle = classes(styles.content);
  const mainStyle = classes(styles.main);
  
  return (
    <>
      <Head>
        <title>Rison {page.title ? ` | ${page.title}` : ''}</title>
        <meta name="description" content={page.description}/>
      </Head>
      <div className={styles.content}>
        <NavBar menu={menu}/>
        <div className={mainStyle}>
          {children}
        </div>
        <Footer contact={contact} />
      </div>
    </>
  )
}
