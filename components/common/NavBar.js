import styles from './NavBar.module.scss'
import Link from 'next/link'

export default function NavBar({menu}) {
  return (
    <div className={styles.nav}>
      <div>
        <Link href={`/`}>
          <a>
            <img className={styles.logo} src={'/images/Logo.svg'}/>
          </a>
        </Link>
      </div>
      <ul className={styles['nav-items']}>
        {menu.map((m, idx)=>
          <li key={idx} className={styles['nav-item']}>
            <Link href={`/${m.page.slug}`}>
              <a>{m.title}</a>
            </Link>
          </li>
        )}    
      </ul>
    </div>
  )
}
