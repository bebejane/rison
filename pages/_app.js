import "../styles/index.scss";
import Head from "next/head";
import Layout from "/components/common/Layout";
import { UIProvider } from "/lib/context/ui";
import { AnimatePresence } from 'framer-motion';
import Router from "next/router";
import { useEffect } from "react";

// bugfix for framer-motion page transition 
const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange );
Router.events.on("routeChangeStart", routeChange );

const MyApp = ({ Component, pageProps, router, menu }) => {

  // bugfix for framer-motion page transition 
  useEffect(() => router.push({pathname: router.pathname, query: {...router.query}}), []);
  
  return (  
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    </Head>  
    <UIProvider>
      <Layout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
      </Layout>
    </UIProvider>
  </>
  )
}
export default MyApp;
