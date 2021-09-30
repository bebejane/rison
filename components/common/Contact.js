import React, { useState, useContext } from "react";
import Link from 'next/link';
import styles from "./Contact.module.scss";
import ReactMarkdown from "react-markdown";

const Contact = ({ contact, className }) => {
	return (
		<div className={styles.contact}>
			<div className={styles.wrapper}>
				<h3>{contact.headlineGeneral}</h3>
				<h2><ReactMarkdown>{contact.textGeneral}</ReactMarkdown></h2>
				<h3>{contact.headlineCareer}</h3>
				<h2><ReactMarkdown>{contact.textCareer}</ReactMarkdown></h2>
			</div>
		</div>
	)
};

export default Contact;
