import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/servicesData';
import { SITE_URL } from '@/lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  // Same domain as the canonicals, so sitemap URLs never hit a redirect
  const baseUrl = SITE_URL;

  // 1. Static Core Landing Pages (Main hub + Area Landing Pages)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/frisoer-gentofte`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/frisoer-charlottenlund`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 2. Dynamic Service Pillar Pages generated automatically from servicesData
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/behandlinger/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}