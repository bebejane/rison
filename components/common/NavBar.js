import styles from './NavBar.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import { useUI } from "/lib/context/ui";
import { useState } from 'react';
import {Squash as Hamburger} from 'hamburger-react'

export default function NavBar({menu, contact, pathname}) {
  if(!menu) return null
  const [ui, setUI] = useUI()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  
  return (
    <nav className={cn(styles.nav, showMobileMenu && styles.showMobile)}>
      <div className={styles.logo}>
        <Link href={`/`}>
          <a>
            <img src={'/images/Logo.svg'}/>
          </a>
        </Link>
      </div>
      <ul className={styles.navItems}>
        {menu.map((m, idx)=>
          <li key={idx} className={cn(styles.navItem, `/${m.slug}` === pathname && styles.selected)}>
            <Link href={`/${m.slug || '' }`}>
              <a>{m.title}</a>
            </Link>
          </li>
        )}
        <div className={styles.contactFooter}>
          <a href="mailto:info@rison.com">info@rison.com</a><br/>
          <a href="tel://0046031223300">+46 (0) 31 223 300</a>
        </div> 
      </ul>
      <button className={styles.contact} onClick={()=>setUI({type:'SHOW_CONTACT'})}>Contact us</button>
      <div className={styles.navMobile}>
        <Hamburger 
          isOpen={showMobileMenu} 
          duration={0.4}
          onToggle={(toggle)=>setShowMobileMenu(toggle)}
          color={showMobileMenu ? '#fff' : '#000'}
        />
      </div>
    </nav>
  )
}