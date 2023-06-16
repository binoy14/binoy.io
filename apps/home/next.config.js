// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nx/next/plugins/with-nx");

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
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
    loader: "custom",
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
  pageExtensions: ["ts", "tsx", "js", "jsx", "md"],
  webpack(config) {
    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },
};

module.exports = withNx(nextConfig);
