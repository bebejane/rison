import styles from "./Footer.module.scss";

const Footer = ({ contact }) => (
	<div className={styles.footer}>
		<div className={styles.title}>Riton Capital</div>
		<div className={styles.address}>{contact.address}</div>
		<div className={styles.email}>{contact.email}</div>
		<div className={styles.social}>
			{contact.twitter && <img src={"/images/icons/twitter.svg"} />}
			{contact.instagram && <img src={"/images/icons/instagram.svg"} />}
			{contact.facebook && <img src={"/images/icons/facebook.svg"} />}
		</div>
	</div>
);

export default Footer;
