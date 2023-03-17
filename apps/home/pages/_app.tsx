import "../public/global.css";

import { Analytics } from "@vercel/analytics/react";
import { NextSeo } from "next-seo";

import { Layout } from "../components/Layout";

import type { AppProps } from "next/app";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <Analytics />
    </>
  );
}

export default CustomApp;
