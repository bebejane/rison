import styles from './NavBar.module.scss'

export default function NavBar({menu}) {  
  console.log(menu)
  return (
    <div className={styles.nav}>
      <div>
        <img className={styles.logo} src={'/images/Logo.svg'}/>
      </div>
      <div className={styles['nav-items']}>
        {menu.map((m)=>
          <div className={styles['nav-item']}>{m.title}</div>
        )}    
      </div>
    </div>
  )
}
