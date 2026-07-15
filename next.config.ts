// import type { NextConfig } from "next";
// import path from "path";
// const nextConfig: NextConfig = {
//   /* config options here */
//   turbopack: {
//     root: path.join(__dirname),
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
