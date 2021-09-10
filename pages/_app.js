import Head from "next/head";
import React from "react";
import Layout from "../components/common/Layout";
import "../styles/index.scss";
import { Provider } from "../lib/context";

const MyApp = ({ Component, pageProps, menu }) => (  
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    </Head>  
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </>
);
export default MyApp;
