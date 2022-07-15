import "../public/global.css";
import "../public/prism.css";

import { AppProps } from "next/app";
import Head from "next/head";

import { Layout } from "../components/Layout";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Binoy Patel</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default CustomApp;
