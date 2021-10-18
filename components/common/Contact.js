import React, { useState, useEffect } from "react";
import styles from "./Contact.module.scss";
import Footer from "/components/common/Footer"
import Markdown from "/components/common/Markdown";
import cn from 'classnames'
import { useUI, UIAction } from "lib/context/ui";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import axios from "axios"
import { useForm } from "react-hook-form";

const Contact = ({ contact }) => {
	const [{ showContact }, setUI] = useUI()
	
	return (
		<div className={cn(styles.contact, showContact && styles.show)}>
			<div className={styles.container}>
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
						<h2><Markdown>{contact.textGeneral}</Markdown></h2>
						<h3>{contact.headlineCareer}</h3>
						<h2><Markdown>{contact.textCareer}</Markdown></h2>
						<Newsletter />
					</div>
				</div>
			</div>
			<Footer contact={contact} />
		</div>
	)
};

const Newsletter = () => {

	const [{ showNewsletter, showContact }, setUI] = useUI()
	const [error, setError] = useState();
	const [subscribed, setSubscribed] = useState(false);
	const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
	
	const onSubmitSignup = async ({ email }) => {
		try {
			const res = await axios.post('/api/signup', { email });
			setSubscribed(true)
		} catch (err) {
			const { message } = err.response.data
			setError(message)
		}
	}
	useEffect(() => isSubmitting && setError(false) && setSubscribed(false), [isSubmitting]);
	useEffect(()=> !showContact && setUI({ type: UIAction.HIDE_NEWSLETTER }), [showContact])

	return (
		<Flippy
			flipOnHover={false}
			flipOnClick={true}
			flipDirection="vertical"
			isFlipped={subscribed ? false : showNewsletter}
		>
			<FrontSide className={styles.newsletter}>
				{!subscribed ?
					<p>Keep yourself updated by <a onClick={(e) => setUI({ type: UIAction.TOGGLE_NEWSLETTER })}> joining our newsletter</a>.</p>
					:
					<p>Thanks for signing up!</p>
				}
			</FrontSide>
			<BackSide className={styles.newsletterForm}>
				<form
					className={styles.newsletterForm}
					onSubmit={handleSubmit(onSubmitSignup)}
					onClick={(e) => e.stopPropagation()}
				>
					<input
						autoFocus={true}
						placeholder={'E-mail...'}
						{...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
					/>
					<button className={styles.submitButton} type="submit">
						Send
						{isSubmitting && <div className={styles.spinner}><div className={styles.loader}></div></div>}
					</button>
					<div className={styles.newsletterError}>{error ? `Error: ${error}` : ''}</div>
				</form>
			</BackSide>
		</Flippy>
	)
}

export default Contact;
