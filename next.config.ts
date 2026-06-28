import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  async redirects() {
    return [
      { source: '/services/ftl', destination: '/services/full-truck-load-services', permanent: true },
      { source: '/services/ptl', destination: '/services/part-truck-load-services', permanent: true },
      { source: '/services/express', destination: '/services/express-delivery', permanent: true },
      { source: '/services/b2bcoloading', destination: '/services/b2b-coloading', permanent: true },
      { source: '/services/household', destination: '/services/household-shifting', permanent: true },
      { source: '/services/office', destination: '/services/office-shifting', permanent: true },
      { source: '/services/warehouse', destination: '/services/warehouse-storage', permanent: true },
      { source: '/services/local', destination: '/services/local-shifting', permanent: true },
      { source: '/services/vehicle', destination: '/services/car-bike-transport', permanent: true },
      { source: '/services/exhibition', destination: '/services/exhibition-trade-logistics', permanent: true },
      { source: '/services/ecommerce', destination: '/services/ecommerce-logistics', permanent: true },
      { source: '/services/reverselog', destination: '/services/reverse-logistics', permanent: true },
    ];
  },
};

export default nextConfig;
