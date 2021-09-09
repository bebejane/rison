import styles from './Content.module.scss'
import classes from 'classnames'
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Content({menu, children}) {
  
  const contentStyle = classes(styles.content);

  return (
    <div className={contentStyle}>
      <NavBar menu={menu}/>
      {children}
      <Footer />
    </div>
  )
}
