import styles from './Button.module.scss'
const Button = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  )
}
export default Button;
