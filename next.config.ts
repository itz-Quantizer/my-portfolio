// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  // 1. IMAGE OPTIMIZATION: Turn off for static hosting
  images: {
    unoptimized: true,
  },

  // 2. REPO NAME: Change '/my-portfolio' to your actual GitHub repository name.
  // If your repo is exactly 'username.github.io', remove this line entirely.
  basePath: '/my-portfolio', 

  // 2. Trailing Slash (FIXES MANY GITHUB PAGES ERRORS)
  // trailingSlash: true,
};

export default nextConfig;