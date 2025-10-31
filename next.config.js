/** @type {import('next').NextConfig} */
const nextConfig = {
  // 'output: export' generates static HTML files
  // Works for both Vercel and Netlify
  output: 'export',

  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
