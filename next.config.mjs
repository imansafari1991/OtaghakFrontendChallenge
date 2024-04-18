/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.otaghak.com',
        port: '',
        pathname: '/otg-images-new/X500/*',
      },
    ],
  },
};

export default nextConfig;
