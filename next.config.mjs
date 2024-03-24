/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "Access-Control-Allow-Credentials", value: "true" },
        { key: "Access-Control-Allow-Origin", value: "*" },
        {
          key: "Access-Control-Allow-Methods",
          value: "GET,DELETE,PATCH,POST,PUT",
        },
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          process.env.AWS_CLOUDFRONT_HOSTNAME ||
          process.env.STORYBOOK_AWS_CLOUDFRONT_HOSTNAME,
        port: "",
        pathname: "/**",
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/Sheet/:path*",
        destination: `${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/Sheet/:path*`,
      },
    ];
  },
  output: "standalone",
};
export default nextConfig;
