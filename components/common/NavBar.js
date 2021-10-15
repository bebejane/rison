import styles from './NavBar.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import { useUI } from "/lib/context/ui";
import { useEffect, useState } from 'react';
import useVisibility from '/lib/hooks/useVisibility';
import Hamburger from 'hamburger-react'
import { useScrollDirection } from 'react-use-scroll-direction';

export default function NavBar({ menu, contact, pathname }) {
  const [ui, setUI] = useUI()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showFloaterMenu, setShowFloaterMenu] = useState(false)

  const [ref, scroller] = useVisibility('logo')
  const { scrollDirection } = useScrollDirection()

  const ratio = (1 - scroller.ratio)
  const opacity = (scroller.ratio * 2.0) - 1.0
  const scale = Math.max(1, (1 + ratio) - 0.2)

  const logoStyles = {
    r: {
      transform: `translateX(-${ratio * 200}px)`,
      opacity
    },
    i: {
      transform: `translateX(-${ratio * 200}px)`,
      opacity
    },
    s: {
      transform: `translateX(-${ratio * 200}px)`,
      opacity
    },
    o: {
      position: 'fixed',
      transform: `translateX(-${ratio * 100}px) scale(${scale})`
    },
    n: {
      transform: `translateY(-${ratio * 200}px)`,
      opacity
    }
  }

  useEffect(() => scrollDirection !== null && setShowFloaterMenu(scrollDirection === 'UP'), [scrollDirection])

  return (
    <nav className={cn(styles.nav, showMobileMenu && styles.showMobile)} ref={ref}>
      <div className={styles.logo}>
        <Link href={`/`}>
          <a className={styles.logoLetters}>
            <img style={logoStyles.r} alt="R" src={'/images/logo-r.svg'} />
            <img style={logoStyles.i} alt="I" src={'/images/logo-i.svg'} />
            <img style={logoStyles.s} alt="S" src={'/images/logo-s.svg'} />
            <img style={logoStyles.o} alt="O" src={'/images/logo-o.svg'} onMouseEnter={() => setShowFloaterMenu(true)} />
            <img style={logoStyles.n} alt="N" src={'/images/logo-n.svg'} />
            <img className={styles.logoMobile} alt="Logo-o" src={'/images/logo.svg'} />
          </a>
        </Link>
      </div>
      <div className={cn(styles.menu, showFloaterMenu && styles.floater)} onMouseLeave={() => setShowFloaterMenu(false)}>
        <ul className={styles.navItems}>
          {menu.map((m, idx) =>
            <li key={idx} className={cn(styles.navItem, `/${m.slug}` === pathname && styles.selected)}>
              <Link href={`/${m.slug || ''}`}>
                <a>{m.title}</a>
              </Link>
            </li>
          )}
          <div className={styles.contactFooter}>
            <a href="mailto:info@rison.com">info@rison.com</a><br />
            <a href="tel://0046031223300">+46 (0) 31 223 300</a>
          </div>
        </ul>
        <button
          className={styles.contact}
          onClick={() => setUI({ type: 'SHOW_CONTACT' })}
        >
          Contact us
        </button>
        <div className={styles.navMobile}>
          <Hamburger
            isOpen={showMobileMenu}
            duration={0.5}
            onToggle={(toggle) => setShowMobileMenu(toggle)}
            color={showMobileMenu ? '#fff' : '#3A3A3A'}
            label={'Menu'}
            size={26}
          />
        </div>
      </div>

    </nav>
  )
}