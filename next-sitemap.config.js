/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.london-clean01.co.uk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/admin/*'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
    ],
    additionalSitemaps: [],
  },
  exclude: ['/api/*', '/_next/*', '/admin/*'],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.7;
    let changefreq = 'daily';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/areas/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/services')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/about' || path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/blog/')) {
      priority = 0.6;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    // London areas/districts
    const londonAreas = [
      'kensington',
      'chelsea',
      'westminster',
      'camden',
      'islington',
      'shoreditch',
      'mayfair',
      'canary-wharf',
      'notting-hill',
      'fulham',
      'battersea',
      'greenwich',
      'hammersmith',
      'wimbledon',
      'richmond',
    ];

    londonAreas.forEach((area) => {
      result.push({
        loc: `/areas/${area}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
};
