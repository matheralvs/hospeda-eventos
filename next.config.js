/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/events",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
