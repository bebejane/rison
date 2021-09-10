import React, { useState, useContext } from "react";
import { Context } from "../../lib/context";

import Link from 'next/link';
import styles from "./Footer.module.scss";

const Footer = ({ contact : {address, email, twitter, facebook, instagram} }) => {
	const { state, dispatch } = useContext(Context);
	console.log(state, dispatch)
	return (
		<div className={styles.footer}>
			<div className={styles.title}>Riton Capital</div>
			<div className={styles.address}>{address}</div>
			<div className={styles.email}>{email}</div>
			<div onClick={()=>{dispatch({type: "ADD_CLICK", payload: null})}}>CLICK {state.clicks}</div>
			
			<div className={styles.social}>
				{twitter && 
					<Link href={twitter}>
						<a><img src={"/images/icons/twitter.svg"} /></a>
					</Link>
				}
				{instagram && 
					<Link href={instagram}>
						<a><img src={"/images/icons/instagram.svg"} /></a>
					</Link>
				}
				{facebook && 
					<Link href={facebook}>
						<a><img src={"/images/icons/facebook.svg"} /></a>
					</Link>
				}
			</div>
		</div>
	)
};

export default Footer;
