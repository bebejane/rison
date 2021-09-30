import Head from 'next/head'
import styles from './Content.module.scss'
import classes from 'classnames'
import Footer from "./Footer";
import NavBar from "./NavBar";
import Contact from "./Contact";
import {useState} from "react";
import {motion} from "framer-motion"

const pageAnimation = {
  initial: {
    x: '100%',
    opacity: 1,
    transition: { duration: 0.5, delay: 0.0 },
  },
  animate: {
    x: '0%',
    opacity: 1,
    transition: {duration: 0.5 },
  },
  exit: {
    x: '-100%',
    opacity: 1,
    transition: {duration: 0.5, delay: 0.0 },
  }
}

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
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageAnimation}
      >
        <div className={contentStyle}>
          <NavBar menu={menu} setShowContact={setShowContact} showContact={showContact} />
          <div className={mainStyle}>
            {children}
          </div>
        </div>
        <Footer contact={contact} />        
      </motion.div>
      <Contact contact={contact} showContact={showContact} setShowContact={setShowContact} />
    </>
  )
}
