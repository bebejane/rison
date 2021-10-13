import React, { useState, useEffect } from "react";
import styles from "./Contact.module.scss";
import Footer from "/components/common/Footer"
import ReactMarkdown from "react-markdown";
import cn from 'classnames'
import { useUI, UIAction } from "lib/context/ui";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Contact = ({ contact }) => {
	const [{showNewsletter, showContact}, setUI] = useUI()
	

	return (
		<div className={cn(styles.contact, showContact && styles.show)}>
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
					<Flippy
						flipOnHover={false} // default false
						flipOnClick={true} // default false
						flipDirection="vertical" // horizontal or vertical
						isFlipped={showNewsletter}
						// if you pass isFlipped prop component will be controlled component.
						// and other props, which will go to div
					>
						<FrontSide className={styles.newsletter}>
							<p>
								Keep yourself updated by <a href="#newsletter" onClick={() => setUI({ type: showNewsletter ? UIAction.HIDE_NEWSLETTER: UIAction.SHOW_NEWSLETTER })}> joining our newsletter</a>.
							</p>
						</FrontSide>
						<BackSide className={styles.newsletterForm}>
							<form className={cn(styles.newsletterForm, showNewsletter && styles.visible)} onClick={(e)=>e.stopPropagation()}>
								<input placeholder={'E-mail...'} type="text" />
								<input type="submit" value={'Send'}/>
							</form>
						</BackSide>
					</Flippy>
					{/*
					<div className={styles.newsletter}>
						
						<form className={cn(styles.newsletterForm, showNewsletter && styles.visible)}>
							<input placeholder={'E-mail...'} type="text" />
							<input type="submit" value={'Send'}/>
						</form>
					</div>
					*/}
				</div>
			</div>
			<Footer contact={contact} />
		</div>
	)
};

export default Contact;
