import Head from 'next/head'
import styles from './Content.module.scss'
import classes from 'classnames'
import Footer from "./Footer";
import NavBar from "./NavBar";
import Contact from "./Contact";
import {useState} from "react";

export default function Content({page = {}, contact, menu, children}) {

  const contentStyle = classes(styles.content);
  const mainStyle = classes(styles.main);
  const [showContact, setShowContact] = useState(false)
  
  return (
    <>
      <Head>
        <title>Rison {page.title ? ` | ${page.title}` : ''}</title>
        <meta name="description" content={page.description}/>
      </Head>
      <div className={contentStyle}>
        <NavBar menu={menu} setShowContact={setShowContact} showContact={showContact} />
        <div className={mainStyle}>
          {children}
        </div>
      </div>
      <Contact contact={contact} showContact={showContact} setShowContact={setShowContact} />
      <Footer contact={contact} />
    </>
  )
}
