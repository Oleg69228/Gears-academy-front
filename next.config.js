/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // ⬅️ Включает `next export`
  distDir: 'dist',       // ⬅️ Устанавливает папку для билда
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg"],
    unoptimized: true,
  },
}

module.exports = nextConfig
