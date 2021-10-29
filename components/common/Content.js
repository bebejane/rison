import styles from "./Content.module.scss";
import {Footer, NavBar, Contact} from "./";
import { motion } from "framer-motion";

const duration = 0.35;

const pageAnimation = {
	initial: {
		opacity: 0,
		transition: { duration },
	},
	animate: {
		opacity: 1,
		transition: { duration },
	},
	exit: {
		opacity: 0,
		transition: { duration },
	},
};

export default function Content({ page = {}, contact, menu, pathname, children }) {
	if(!contact || !menu || !page) return null


	return (
		<>
			<div className={styles.content}>
				<NavBar 
					menu={menu} 
					contact={contact} 
					pathname={pathname}
				/>
				<motion.main 
					className={styles.main}
					initial="initial" 
					animate="animate" 
					exit="exit" 
					variants={pageAnimation}
				>
					{children}
				</motion.main>
			</div>
			<Footer contact={contact} />
			<Contact contact={contact} />
		</>
	);
}
