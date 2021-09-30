import styles from './Button.module.scss'
const Button = ({ label }) => {
  return (
    <button className={styles.button}>
      {label}
    </button>
  )
}
export default Button;
