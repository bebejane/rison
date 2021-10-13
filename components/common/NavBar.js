import styles from './NavBar.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import { useUI } from "/lib/context/ui";
import { useState } from 'react';
import useVisibility from '/lib/hooks/useVisibility';
import {Squash as Hamburger} from 'hamburger-react'

export default function NavBar({menu, contact, pathname}) {
  const [ui, setUI] = useUI()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showFloaterMenu, setShowFloaterMenu] = useState(false)
  const [ref, scroller] = useVisibility('logo')
  const ratio = (1-scroller.ratio)
  
  const logoStyles = {
    r:{
      transform:`translateX(-${ratio*200}px)`,
    },
    i:{
      transform:`translateX(-${ratio*200}px)`,
    },
    s:{
      transform:`translateX(-${ratio*200}px)`,
    },
    o:{
      position:'fixed',
      transform:`translateX(-${ratio*100}px)`
    },
    n:{
      transform:`translateY(-${ratio*200}px)`,
    }
  }
  
  return (
    <nav className={cn(styles.nav, showMobileMenu && styles.showMobile)} ref={ref}>
      <div className={styles.logo}>
        <Link href={`/`}>
          <a className={styles.logoLetters}>
            <img style={logoStyles.r} alt="Logo-o" src={'/images/logo-r.svg'}/>
            <img style={logoStyles.i} alt="Logo-o" src={'/images/logo-i.svg'}/>
            <img style={logoStyles.s} alt="Logo-o" src={'/images/logo-s.svg'}/>
            <img style={logoStyles.o} alt="Logo-o" src={'/images/logo-o.svg'} onMouseEnter={()=> setShowFloaterMenu(true)}/>
            <img style={logoStyles.n} alt="Logo-o" src={'/images/logo-n.svg'}/>
            <img className={styles.logoMobile} alt="Logo-o" src={'/images/logo.svg'}/>
          </a>
        </Link>
      </div>
      <Menu 
        {...{menu, pathname, showMobileMenu}} 
        setUI={setUI} 
        setShowMobileMenu={setShowMobileMenu}  
        className={showFloaterMenu && styles.floater}
        onMouseLeave={()=>setShowFloaterMenu(false)}
      />
    </nav>
  )
}

const Menu = ({menu, pathname, setUI, showMobileMenu, setShowMobileMenu, className, onMouseLeave}) => {
  
  return (
    <div className={cn(styles.menu, className)} onMouseLeave={onMouseLeave}>
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
      <button 
        className={styles.contact} 
        onClick={()=>setUI({type:'SHOW_CONTACT'})}
      >
        Contact us
      </button>
      <div className={styles.navMobile}>
        <Hamburger 
          isOpen={showMobileMenu} 
          duration={0.5}
          onToggle={(toggle)=>setShowMobileMenu(toggle)}
          color={showMobileMenu ? '#fff' : '#000'}
          label={'Menu'}
        />
      </div>
    </div>
  )
}