/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository name is different from your GitHub username, add:
  // basePath: '/your-repo-name',
}

export default nextConfig;
