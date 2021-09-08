import Head from "next/head";
import React from "react";
import Layout from "../components/common/Layout";
import ContextProvider from "../lib/context";
import "../styles/style.scss";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>  
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  </>
);

export default MyApp;
