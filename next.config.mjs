/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/notes", permanent: false },
      { source: "/blog/:path*", destination: "/notes", permanent: false },
      { source: "/currently", destination: "/about", permanent: false },
    ];
  },
};

export default nextConfig;
