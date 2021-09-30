import styles from './NavBar.module.scss'
import Link from 'next/link'
import classes from 'classnames'
import {useEffect, useState, useContext} from 'react'
import { AppContext } from "/lib/context";

export default function NavBar({menu, setShowContact, showContact}) {

  const {state, dispath} = useContext(AppContext)
  /*
  const [menu, setMenu] = useState([]);
  useEffect(async ()=>{
    const menus = await menuController.all();
    setMenu(menus)
  }, [])
  */
  console.log(state)
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
      <button className={styles.contact} onClick={()=>setShowContact(!showContact)}>Contact us</button>
      <div className={styles['nav-mobile']}>
        <img className={styles.logo} src={'/images/icons/icon-menu.svg'}/>
      </div>
    </nav>
  )
}