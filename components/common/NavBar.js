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
  const [scrollStyles, setScrollStyles] = useState({ratio:0, lastBack:0, lastFfw:0, marker:0})
  const menuHeight = 100;

  useScrollPosition(({ prevPos, currPos }) => {
    
    if(window.innerWidth < 768 ) return setScrollStyles({})
    if(currPos.y > 0) return
    const y = currPos.y
    const {y:prevY} = prevPos;
    const direction = prevY > y ? "down" : "up"
    const marker = scrollStyles.direction != direction ? y : scrollStyles.marker
    const ratio = direction === "down" ? Math.min(Math.abs(y-marker)/menuHeight, 1) : (100-Math.min(y-marker, 100))/100
    const opacity = 1-(ratio)
    const scale = Math.max(1, (1+ratio) -0.2)
    const sStyles = {
      r:{ transform:`translateX(-${ratio*200}px)`, opacity},
      i:{ transform:`translateX(-${ratio*200}px)`,opacity},
      s:{ transform:`translateX(-${ratio*200}px)`, opacity},
      o:{ transform:`translateX(-${ratio*70}px) scale(${scale})`},
      n:{transform:`translateY(-${ratio*200}px)`, opacity},
      menu:{
        position:'fixed',
        //top:`${Math.abs(y)}px`,
        top:0,
        left:0,
        width:'100%',
        backgroundColor:'#fff',
        transform:`translateY(-${ratio*200}%)`,
      },
      direction,
      marker,
      t: new Date().getTime()
    }
    setScrollStyles(sStyles)
    console.log(y)
  })

  const handleFloaterMenu = (e) => {
    setScrollStyles({
      menu:{ position:'fixed',width:'100%',top:0, left:0,backgroundColor:'#fff'},
      direction:"up",
      marker:-(window.scrollTop)-menuHeight
    })
  }

  return (
    <nav className={cn(styles.nav, showMobileMenu && styles.showMobile)}>
      <div className={styles.logo}>
        <Link href={`/`}>
          <a>
            <span style={scrollStyles.r} alt="R">R</span>
            <span style={scrollStyles.i} alt="I">I</span>
            <span style={scrollStyles.s} alt="S">S</span>
            <span style={scrollStyles.o} alt="O" onMouseEnter={handleFloaterMenu}>O</span>
            <span style={scrollStyles.n} alt="N">N</span>
          </a>
        </Link>
      </div>
      <div className={cn(styles.menu)} style={scrollStyles.menu} onMouseLeave={()=>setShowFloaterMenu(false)}>
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