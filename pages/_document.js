import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { html, head } = ctx.renderPage();
    return { ...initialProps, html, head};
  }

  render() {
    const { ids } = this.props;
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index, follow" />
          <meta key="googlebot" name="googlebot" content="index,follow" />
          <meta name="google" content="notranslate" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="keywords" content="" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="" />
          <meta property="og:title" content="" />
          <meta property="og:description" content=""/>
          <meta property="og:url" content="" />
          <meta property="og:image" content=""/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
