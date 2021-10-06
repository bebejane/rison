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
				{renderMetaTags(generateMetaTags({seo, site, pathname:router.pathname}))}
			</Head>
			<UIProvider>
				<Layout>
					<AnimatePresence exitBeforeEnter initial={false}>
						<Content 
							key={router.route} 
							page={page} 
							menu={menu} 
							contact={contact} 
							pathname={router.pathname}
						>
							<Component {...pageProps} />
						</Content>
					</AnimatePresence>
				</Layout>
			</UIProvider>
		</>
	);
};

const generateMetaTags = ({seo, site, pathname}) => {

	if(!seo || !site) return []
	
	const { favicon, globalSeo } = site;
	const { tags } = seo;

	let metaTags = tags && favicon ? tags.concat(favicon) : []
	let titleTag = metaTags.filter(m=> m.tag === "title")[0]
	
	if(pathname === "/")
		titleTag.content = globalSeo.siteName
	else if(!titleTag.content.startsWith(globalSeo.siteName))
		titleTag.content = `${globalSeo.siteName} -- ${titleTag.content}`

	metaTags = metaTags.map(t => { return t.tag !== 'title' ? t : titleTag})
	
	metaTags.push({
		tag:"meta", 
		attributes:{
			property:"viewport",
			content:"width=device-width, initial-scale=1, maximum-scale=1"
		}
	})
	return metaTags
}

export default MyApp;
