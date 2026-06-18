/** @type {import('next').NextConfig} */
const isStatic = process.env.STATIC_EXPORT === "true";

const nextConfig = {
  reactStrictMode: true,
  ...(isStatic
    ? {
        output: "export",
        basePath: "/Dashboard-Sistemas-DACHA",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
