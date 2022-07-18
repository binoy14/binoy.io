import "../public/global.css";
import "../public/prism.css";

import { NextSeo } from "next-seo";
import { AppProps } from "next/app";

import { Layout } from "../components/Layout";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextSeo
        title="Binoy Patel"
        description="Tangential is a consulting company that helps companies with Web and Mobile Applications."
        canonical="https://binoy.io"
        openGraph={{
          description: "Tangential is a consulting company that helps companies with Web and Mobile Applications.",
          title: "Binoy Patel",
          url: "https://binoy.io",
          type: "website",
          site_name: "Binoy Patel",
        }}
      />
      <div>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default CustomApp;
