import React, { useState, useEffect } from "react";
import styles from "./Contact.module.scss";
import Footer from "/components/common/Footer"
import ReactMarkdown from "react-markdown";
import cn from 'classnames'

const Contact = ({ contact, showContact, setShowContact }) => {
	return (
		<div className={cn(styles.contact, showContact && styles.show)}>
			<div className={styles.close}>
				<button className={cn(styles.closeButton, !showContact && styles.hide)} onClick={()=>setShowContact(false)}>Close</button>
			</div>
			<div className={styles.wrapper}>
				<h3>{contact.headlineGeneral}</h3>
				<h2><ReactMarkdown>{contact.textGeneral}</ReactMarkdown></h2>
				<h3>{contact.headlineCareer}</h3>
				<h2><ReactMarkdown>{contact.textCareer}</ReactMarkdown></h2>
			</div>
			<Footer contact={contact} />
		</div>
	)
};

export default Contact;
