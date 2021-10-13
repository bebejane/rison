import React, { useState, useEffect } from "react";
import styles from "./Contact.module.scss";
import Footer from "/components/common/Footer"
import ReactMarkdown from "react-markdown";
import cn from 'classnames'
import { useUI, UIAction } from "lib/context/ui";

const Contact = ({ contact, showContact, setShowContact }) => {
	const [ui, setUI] = useUI()

	return (
		<div className={cn(styles.contact, ui.showContact && styles.show)}>
			<div className={styles.close}>
				<button
					className={cn(styles.closeButton, !showContact && styles.hide)}
					onClick={() => setUI({ type: UIAction.HIDE_CONTACT })}
				>
					Close
				</button>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.innerWrapper}>
					<h3>{contact.headlineGeneral}</h3>
					<h2><ReactMarkdown>{contact.textGeneral}</ReactMarkdown></h2>
					<h3>{contact.headlineCareer}</h3>
					<h2><ReactMarkdown>{contact.textCareer}</ReactMarkdown></h2>
					<p className={styles.newsletter}>Keep yourself updated by <a href="">joining our newsletter</a>.</p>
					<div>
						<form>
							Email: <input type="text" />
							<input type="submit" />
						</form>
					</div>

				</div>
			</div>
			<Footer contact={contact} />
		</div>
	)
};

export default Contact;
