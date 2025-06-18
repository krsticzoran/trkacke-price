/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://trkacke-price.com',
    generateRobotsTxt: true,
    outDir: 'public',
    exclude: [], 
    robotsTxtOptions: {
      policies: [{
        userAgent: '*',
        allow: '/',
      }]
    }
    /**
   * TODO: Enhance configuration when blog section is added
   * Required adjustments:
   * 1. Import blog data fetching utility
   * 2. Implement additionalPaths() for dynamic blog routes
   * 3. Configure priority/changefreq for blog posts
   * 4. Update robots.txt policies for /blog routes
   */
  }