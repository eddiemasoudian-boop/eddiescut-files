import type { NextConfig } from "next";

const securityHeaders = [
  // 1. Forces secure HTTPS connections (prevents downgrade attacks)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  // 2. Prevents Clickjacking (Stops attackers from putting the site in a hidden iframe)
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  // 3. Prevents "MIME Sniffing" (Stops hackers from disguising scripts as images)
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // 4. Protects user privacy tracking
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  // 5. Hardware Lock: Prevents third-party scripts from turning on the camera, mic, or location
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
  },
  // 6. Optimizes DNS resolution for faster loading
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // 7. Content Security Policy (Whitelists Planway AND Google Maps strictly)
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; frame-src 'self' https://eddies-cut.planway.com https://*.planway.com https://www.google.com;"
  }
];

const nextConfig: NextConfig = {
  // --- SECURITY HEADERS ---
  async headers() {
    return [
      {
        // Apply these headers to ALL routes in the application
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },

  // --- SEO GHOST LINK REDIRECTS ---
  async redirects() {
    return [
      // Old Location Pages
      {
        source: '/frisoer-i-hellerup.htm',
        destination: '/',
        permanent: true,
      },
      {
        source: '/frisoer-i-gentofte.htm',
        destination: '/',
        permanent: true,
      },
      {
        source: '/frisoer-i-charlottenlund.htm',
        destination: '/',
        permanent: true,
      },
      {
        source: '/frisoer-charlottenlund.htm',
        destination: '/',
        permanent: true,
      },
      
      // Legacy Homepage & Content
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.htm',
        destination: '/',
        permanent: true,
      },
      {
        source: '/forside',
        destination: '/',
        permanent: true,
      },
      {
        source: '/kontakt.htm',
        destination: '/',
        permanent: true,
      },
      {
        source: '/galleri.htm',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;