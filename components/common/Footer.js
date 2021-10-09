import React, { useState, useContext } from "react";
import Link from 'next/link';
import styles from "./Footer.module.scss";

const Footer = ({ contact}) => {
	
	const {address, email, twitter, facebook, instagram} = contact
	return (
		<footer className={styles.footer}>
			<div className={styles.title}>Rison Capital</div>
			<div className={styles.address}>{address}</div>
			<div className={styles.email}>{email}</div>
			
			<div className={styles.social}>
				{twitter && 
					<Link href={twitter}>
						<a><img alt="Twitter" src={"/images/icons/twitter.svg"} /></a>
					</Link>
				}
				{instagram && 
					<Link href={instagram}>
						<a><img alt="Instagram" src={"/images/icons/instagram.svg"} /></a>
					</Link>
				}
				{facebook && 
					<Link href={facebook}>
						<a><img alt="Facebook" src={"/images/icons/facebook.svg"} /></a>
					</Link>
				}
			</div>
		</footer>
	)
};

export default Footer;
