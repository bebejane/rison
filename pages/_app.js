import "../styles/index.scss";
import Head from "next/head";
import Layout from "/components/common/Layout";
import { Provider } from "/lib/context";
import { AnimatePresence } from 'framer-motion';

const MyApp = ({ Component, pageProps, router, menu }) => (  
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    </Head>  
    <Provider>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
      </Layout>
    </Provider>
  </>
);
export default MyApp;
