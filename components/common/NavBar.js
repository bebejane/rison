import styles from './NavBar.module.scss'
import Link from 'next/link'
import classes from 'classnames'
import { useUI } from "/lib/context/ui";

export default function NavBar({menu, setShowContact, showContact}) {

  const [ui, setUI] = useUI()
  const navStyle = classes(styles['nav-items']);
  const navItemStyle = classes(styles['nav-item']);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href={`/`}>
          <a>
            <img src={'/images/Logo.svg'}/>
          </a>
        </Link>
      </div>
      <ul className={navStyle}>
        {menu.map((m, idx)=>
          <li key={idx} className={navItemStyle}>
            <Link href={`/${m.slug || '' }`}>
              <a>{m.title}</a>
            </Link>
          </li>
        )}    
      </ul>
      <button className={styles.contact} onClick={()=>setUI({type:'SHOW_CONTACT'})}>Contact us</button>
      <div className={styles['nav-mobile']}>
        <img className={styles.logo} src={'/images/icons/icon-menu.svg'}/>
      </div>
    </nav>
  )
}