/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // это ключевое!
  //basePath: '/your-repo-name', // название твоего GitHub репозитория
  //trailingSlash: true, // важно для корректной работы ссылок на GitHub Pages
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
