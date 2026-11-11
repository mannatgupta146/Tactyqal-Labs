/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "tactyqal.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/learn/:path*",
        destination: "/images/blog-articles/:path*",
      },
      {
        source: "/blog-articles/:path*",
        destination: "/images/blog-articles/:path*",
      },
      {
        source: "/apps/:path*",
        destination: "/images/student-apps/:path*",
      },
      {
        source: "/student-apps/:path*",
        destination: "/images/student-apps/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
