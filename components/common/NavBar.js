import styles from './NavBar.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import { useUI } from "/lib/context/ui";
import { useEffect, useState } from 'react';
import {Squash as Hamburger} from 'hamburger-react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export default function NavBar({menu, contact, pathname}) {
  const [ui, setUI] = useUI()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showFloaterMenu, setShowFloaterMenu] = useState(false)
  const [scrollStyles, setScrollStyles] = useState({})
  const menuHeight = 100;

  useScrollPosition(({ prevPos, currPos }) => {
    const scrollDown = prevPos.y >= currPos.y
    const {scrollBack} = scrollStyles
    const ratio = scrollDown ? Math.min(Math.abs(currPos.y)/menuHeight, 1) : (100-Math.min(currPos.y-scrollBack, 100))/100
    const opacity = 1-(ratio)
    const scale = Math.max(1, (1+ratio) -0.2)
    
    const sStyles = {
      scrollBack: currPos.y > scrollBack ? scrollBack : currPos.y,
      r:{
        transform:`translateX(-${ratio*200}px)`,
        opacity
      },
      i:{
        transform:`translateX(-${ratio*200}px)`,
        opacity
      },
      s:{
        transform:`translateX(-${ratio*200}px)`,
        opacity
      },
      o:{
        position:'fixed',
        transform:`translateX(-${ratio*100}px) scale(${scale})`
      },
      n:{
        transform:`translateY(-${ratio*200}px)`,
        opacity
      },
      menu:{
        transform:`translateY(-${ratio*100}%)`,
      }
    }
    setScrollStyles(sStyles)
    console.log(ratio, scrollDown, )
  })
  return (
    <nav className={cn(styles.nav, showMobileMenu && styles.showMobile)}>
      <div className={styles.logo}>
        <Link href={`/`}>
          <a className={styles.logoLetters}>
            <img style={scrollStyles.r} alt="R" src={'/images/logo-r.svg'}/>
            <img style={scrollStyles.i} alt="I" src={'/images/logo-i.svg'}/>
            <img style={scrollStyles.s} alt="S" src={'/images/logo-s.svg'}/>
            <img style={scrollStyles.o} alt="O" src={'/images/logo-o.svg'} onMouseEnter={()=> setShowFloaterMenu(true)}/>
            <img style={scrollStyles.n} alt="N" src={'/images/logo-n.svg'}/>
            <img className={styles.logoMobile} alt="Logo-o" src={'/images/logo.svg'}/>
          </a>
        </Link>
      </div>
      <div className={cn(styles.menu, styles.floater)}  style={scrollStyles.menu} onMouseLeave={()=>setShowFloaterMenu(false)}>
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
  
    </nav>
  )
}