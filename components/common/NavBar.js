import styles from './NavBar.module.scss'
import Link from 'next/link'
import classes from 'classnames'

export default function NavBar({menu}) {
  
  const navStyle = classes(styles['nav-items']);
  const navItemStyle = classes(styles['nav-item']);

  return (
    <div className={styles.nav}>
      <div>
        <Link href={`/`}>
          <a>
            <img className={styles.logo} src={'/images/Logo.svg'}/>
          </a>
        </Link>
      </div>
      <ul className={navStyle}>
        {menu.map((m, idx)=>
          <li key={idx} className={navItemStyle}>
            <Link href={`/${m.page.slug}`}>
              <a>{m.title}</a>
            </Link>
          </li>
        )}    
      </ul>
    </div>
  )
}
