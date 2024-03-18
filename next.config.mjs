/** @type {import('next').NextConfig} */
const injectVars = Object.keys(process.env).reduce((c, key) => {
  if (/^NEXT_PUBLIC_/.test(key)) {
    c[`process.env.${key}`] = JSON.stringify(process.env[key]);
  }
  return c;
}, {});

function injectEnv(definitions) {
  const env = "process.env";

  if (!definitions[env]) {
    return {
      ...definitions,
      [env]: JSON.stringify(
        Object.fromEntries(
          Object.entries(definitions)
            .filter(([key]) => key.startsWith(env))
            .map(([key, value]) => [
              key.substring(env.length + 1),
              JSON.parse(value),
            ]),
        ),
      ),
    };
  }
  return definitions;
}

const nextConfig = {
  core: {
    builder: "webpack5",
  },
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
        hostname: process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_HOSTNAME,
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
  webpackFinal: (config) => {
    config.plugins = config.plugins.reduce((c, plugin) => {
      if (plugin instanceof webpack.DefinePlugin) {
        return [
          ...c,
          new webpack.DefinePlugin(
            injectEnv({
              ...plugin.definitions,
              ...injectVars,
            }),
          ),
        ];
      }

      return [...c, plugin];
    }, []);

    return config;
  },
  output: "standalone",
};
export default nextConfig;
