/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'psg-squad-project.s3.eu-north-1.amazonaws.com',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
