/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/projects',
                destination: 'https://github.com/deobibila',
                permanent: true,
            },
            {
                source: '/research',
                destination: 'https://scholar.google.com.au/citations?hl=en&user=JIsp2fQAAAAJ',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
