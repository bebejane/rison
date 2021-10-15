import React, { useState, useEffect } from "react";
import styles from "./Contact.module.scss";
import Footer from "/components/common/Footer"
import ReactMarkdown from "react-markdown";
import cn from 'classnames'
import { useUI, UIAction } from "lib/context/ui";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Contact = ({ contact }) => {
	const [{ showNewsletter, showContact }, setUI] = useUI()


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
						flipOnHover={false}
						flipOnClick={true}
						flipDirection="vertical"
						isFlipped={showNewsletter}
					>
						<FrontSide className={styles.newsletter}>
							<p>
								Keep yourself updated by <a href="#newsletter" onClick={() => setUI({ type: showNewsletter ? UIAction.HIDE_NEWSLETTER : UIAction.SHOW_NEWSLETTER })}> joining our newsletter</a>.
							</p>
						</FrontSide>
						<BackSide className={styles.newsletterForm}>
							<form className={cn(styles.newsletterForm, showNewsletter && styles.visible)} onClick={(e) => e.stopPropagation()}>
								<input autoFocus={true} placeholder={'E-mail...'} type="text" />
								<input type="submit" value={'Send'} />
							</form>

							<form className={cn(styles.newsletterForm, showNewsletter && styles.visible)} onClick={(e) => e.stopPropagation()} id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="191722FC90141D02184CB1B62AB3DC264DCA7763E1BE1E33C5B7BBC95E8DA72E62B338FE3636B22A6569FBD400361118038029B213A29581D7E221848812D3AB">
								<input autoFocus={true} placeholder={'E-mail...'} autocomplete="Email" aria-label="Email" class="js-cm-email-input qa-input-email" id="fieldEmail" maxlength="200" name="cm-jllhuhu-jllhuhu" required="" type="email" />
								<input type="submit" value={'Send'} />
							</form>
							<script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>


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
