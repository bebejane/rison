import styles from './NavBar.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import { useUI } from "/lib/context/ui";
import { useState } from 'react';
import {Squash as Hamburger} from 'hamburger-react'

export default function NavBar({menu, pathname}) {
  if(!menu) return null
  const [ui, setUI] = useUI()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  console.log(showMobileMenu)
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href={`/`}>
          <a>
            <img src={'/images/Logo.svg'}/>
          </a>
        </Link>
      </div>
      <ul className={cn(styles.navItems, showMobileMenu && styles.showMobile)}>
        {menu.map((m, idx)=>
          <li key={idx} className={cn(styles.navItem, `/${m.slug}` === pathname && styles.selected)}>
            <Link href={`/${m.slug || '' }`}>
              <a>{m.title}</a>
            </Link>
          </li>
        )}    
      </ul>
      <button className={styles.contact} onClick={()=>setUI({type:'SHOW_CONTACT'})}>Contact us</button>
      <Hamburger 
        isOpen={showMobileMenu} 
        duration={1.0}
        onToggle={(toggle)=>setShowMobileMenu(toggle)}
        color={showMobileMenu ? '#fff' : '#000'}
      />
    </nav>
  )
}