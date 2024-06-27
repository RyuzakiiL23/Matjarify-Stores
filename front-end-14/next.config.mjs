/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Specify the protocol (e.g., "http" or "https")
        hostname: "*", // Allow all hostnames
      },
      {
        protocol: "https",
        hostname: "uxwing.com",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};

export default nextConfig;
