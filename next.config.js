/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true ,
        domains: ['firebasestorage.googleapis.com'],
    },
    output: 'export'
}

module.exports = nextConfig
