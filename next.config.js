/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2yhylprzvt9g1.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default config;
