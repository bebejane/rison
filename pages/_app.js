import "../styles/index.scss";
import DatoSEO from '/lib/dato/seo';
import Router from "next/router";
import Layout from "/components/common/Layout";
import { useEffect } from "react";
import { UIProvider } from "/lib/context/ui";
import { AnimatePresence } from "framer-motion";
import { Content } from "components/common";

// Bugfix for framer-motion page transition - https://github.com/vercel/next.js/issues/17464
const routeChange = () => {const allStyleElems = document.querySelectorAll('style[media="x"]');allStyleElems.forEach((elem) => elem.removeAttribute("media"))};
Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);

const MyApp = ({ Component, pageProps, router }) => {
	
	// Bugfix for framer-motion page transition
	useEffect(() => router.push({ pathname: router.pathname, query: { ...router.query } }), []);

	const { page, menu, contact, seo, site } = pageProps;
	const { pathname, route } = router
	
	const pageMenu = menu.filter(m => pathname.includes(m.slug))[0]
	const pageTitle = 'Rison' + (pageMenu ? ` -- ${pageMenu.title}` : '')
	
	return (
		<>
			<DatoSEO seo={seo} site={site} pathname={pathname} title={pageTitle} key={pathname}/>
			<UIProvider>
				<Layout>
					<AnimatePresence exitBeforeEnter initial={false}>
						<Content 
							key={route} 
							page={page} 
							menu={menu} 
							contact={contact} 
							pathname={pathname}
						>
							<Component {...pageProps} pathname={pathname}/>
						</Content>
					</AnimatePresence>
				</Layout>
			</UIProvider>
		</>
	);
};

export default MyApp;
