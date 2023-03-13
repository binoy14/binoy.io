// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  swcMinify: true,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  // Added redirect in support for old site
  // not permanent temporarily
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blogs",
        permanent: false,
      },
      {
        source: "/blog/:slug",
        destination: "/blogs/:slug",
        permanent: false,
      },
    ];
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack(config) {
    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },
};

const withMdx = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [require("remark-prism"), import("remark-frontmatter")],
    rehypePlugins: [],
  },
});

module.exports = withNx(withMdx(nextConfig));
