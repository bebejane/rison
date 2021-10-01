import Head from "next/head";
import styles from "./Content.module.scss";
import classes from "classnames";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Contact from "./Contact";
import { motion } from "framer-motion";

const pageAnimation = {
	initial: {
		x: "100%",
		opacity: 1,
		transition: { duration: 0.3, delay: 0.0 },
	},
	animate: {
		x: "0%",
		opacity: 1,
		transition: { duration: 0.3 },
	},
	exit: {
		x: "-100%",
		opacity: 1,
		transition: { duration: 0.3, delay: 0.0 },
	},
};

export default function Content({ page = {}, contact, menu, children }) {
	return (
		<>
			<Head>
				<title>Rison {page.title ? ` | ${page.title}` : ""}</title>
				<meta name="description" content={page.description} />
			</Head>

			<div className={styles.content}>
				<NavBar menu={menu} />
				<motion.div initial="initial" animate="animate" exit="exit" variants={pageAnimation}>
					<div className={styles.main}>{children}</div>
				</motion.div>
			</div>
			<Footer contact={contact} />
			<Contact contact={contact} />
		</>
	);
}
