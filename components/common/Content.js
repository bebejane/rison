import styles from "./Content.module.scss";
import {Footer, NavBar, Contact} from "./";
import { motion } from "framer-motion";

const duration = 0.3;

const pageAnimation = {
	initial: {
		//x: "100%",
		opacity: 1,
		transition: { duration},
	},
	animate: {
		//x: "0%",
		opacity: 1,
		transition: { duration},
	},
	exit: {
		//x: "-100%",
		opacity: 0,
		transition: { duration},
	},
};

export default function Content({ page = {}, contact, menu, pathname, children }) {
	return (
		<>
			<div className={styles.content}>
				<NavBar menu={menu} pathname={pathname}/>
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
