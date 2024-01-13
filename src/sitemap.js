const sitemap = require("sitemap");
const fs = require("fs");
const hostname = "https://www.gspropertycare.com.au/";

const urls = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/Services", changefreq: "monthly", priority: 0.8 },
  { url: "/removalists", changefreq: "monthly", priority: 0.8 },
  { url: "/bond-cleaning", changefreq: "monthly", priority: 0.8 },
  { url: "/carpet-cleaning", changefreq: "monthly", priority: 0.8 },
  { url: "/tile-and-grout-cleaning", changefreq: "monthly", priority: 0.8 },
  { url: "/handyman", changefreq: "monthly", priority: 0.8 },
  { url: "/plumber", changefreq: "monthly", priority: 0.8 },
  { url: "/gardening-services", changefreq: "monthly", priority: 0.8 },
  { url: "/electrician", changefreq: "monthly", priority: 0.8 },
  { url: "/locksmith", changefreq: "monthly", priority: 0.8 },
  { url: "/about-us", changefreq: "monthly", priority: 0.8 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});
// Write sitemap to public directory
fs.writeFileSync("./public/sitemap.xml", sitemapInstance.toString());
