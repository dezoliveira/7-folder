// module.exports = {
//     async redirects() {
//         return [
//         // Basic redirect
//         {
//             source: '/about',
//             destination: '/',
//             permanent: true,
//         },
//         // Wildcard path matching
//         {
//             source: '/blog/:slug',
//             destination: '/news/:slug',
//             permanent: true,
//         },
//         ]
//     },
// }

// // next.config.js
// module.exports = {
//     async rewrites() {
//         return [
//           {
//             source: '/api/:path*',
//             destination: 'https://api.example.com/:path*',
//           },
//         ]
//       },
//   };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async headers() {
//     return [
//       {
//         // Routes this applies to
//         source: "/api/(.*)",
//         // Headers
//         headers: [
//           // Allow for specific domains to have access or * for all
//           {
//             key: "Access-Control-Allow-Origin",
//             value: "*",
//             // DOES NOT WORK
//             // value: process.env.ALLOWED_ORIGIN,
//           },
//           // Allows for specific methods accepted
//           {
//             key: "Access-Control-Allow-Methods",
//             value: "GET, POST, PUT, DELETE, OPTIONS",
//           },
//           // Allows for specific headers accepted (These are a few standard ones)
//           {
//             key: "Access-Control-Allow-Headers",
//             value: "Content-Type, Authorization",
//           },
//         ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/:path*'
      }
    ]
  }
}
