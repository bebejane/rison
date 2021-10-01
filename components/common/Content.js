import Head from "next/head";
import styles from "./Content.module.scss";
import {Footer, NavBar, Contact} from "./";
import { motion } from "framer-motion";
const duration = 5;

const pageAnimation = {
	initial: {
		//x: "100%",
		opacity: 1,
		transition: { duration, delay: 0.0 },
	},
	animate: {
		//x: "0%",
		opacity: 1,
		transition: { duration },
	},
	exit: {
		//x: "-100%",
		opacity: 0,
		transition: { duration, delay: 0.0 },
	},
};

export default function Content({ page = {}, contact, menu, children }) {
	return (
		<>
			<Head>
				<title>Rison {page.title ? ` | ${page.title}` : ""}</title>
				<meta name="description" content={page.description} />
			</Head>
			<motion.div initial="initial" animate="animate" exit="exit" variants={pageAnimation}>
				<div className={styles.content}>
					<NavBar menu={menu} />
					<div key={'content'} className={styles.main}>{children}</div>
				</div>
			</motion.div>
			<Footer contact={contact} />
			<Contact contact={contact} />
		</>
	);
}
