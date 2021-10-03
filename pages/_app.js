import "../styles/index.scss";
import Head from "next/head";
import Router from "next/router";
import Layout from "/components/common/Layout";
import { useEffect } from "react";
import { UIProvider } from "/lib/context/ui";
import { AnimatePresence } from "framer-motion";
import { Content } from "components/common";
import { renderMetaTags } from "react-datocms";

// Bugfix for framer-motion page transition
// https://github.com/vercel/next.js/issues/17464
const routeChange = () => {
	const tempFix = () => {
		const allStyleElems = document.querySelectorAll('style[media="x"]');
		allStyleElems.forEach((elem) => elem.removeAttribute("media"));
	};
	tempFix();
};
Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);

const MyApp = ({ Component, pageProps, router }) => {

	// Bugfix for framer-motion page transition
	useEffect(() => router.push({ pathname: router.pathname, query: { ...router.query } }), []);

	const { page, menu, contact, seo, site } = pageProps;

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				{seo && seo.tags && site && site.favicon && renderMetaTags(seo.tags.concat(site.favicon))}
			</Head>
			<UIProvider>
				<Layout>
					<AnimatePresence exitBeforeEnter initial={false}>
						<Content page={page} menu={menu} contact={contact} key={router.route}>
							<Component {...pageProps} />
						</Content>
					</AnimatePresence>
				</Layout>
			</UIProvider>
		</>
	);
};
export default MyApp;
