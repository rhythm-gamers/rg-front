/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      {
        source: "/unity/build/Build/build.:data.gz",
        headers: [
          {
            key: "Content-Encoding",
            value: "gzip",
          },
        ],
      },
      {
        source: "/Sheet/:sheetName/:sheetData",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
  output: "standalone",
};
export default nextConfig;
