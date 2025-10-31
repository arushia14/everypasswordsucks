/** @type {import('next').NextConfig} */
const nextConfig = {
  // No 'output: export' needed for Vercel
  // Vercel handles deployment automatically

  images: {
    // If you add images later, Vercel will optimize them
    domains: [],
  },

  // Optional: Add trailing slash for consistency
  trailingSlash: true,

  // Optional: Redirect www to non-www (or vice versa)
  async redirects() {
    return [
      // Example: Redirect www to non-www
      // {
      //   source: '/:path*',
      //   has: [{ type: 'host', value: 'www.everypasswordsucks.com' }],
      //   destination: 'https://everypasswordsucks.com/:path*',
      //   permanent: true,
      // },
    ]
  },
}

module.exports = nextConfig
