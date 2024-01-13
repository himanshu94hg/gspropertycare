const sitemap = require("sitemap");
const fs = require("fs");
const hostname = "https://www.gspropertycare.com.au/";

const urls = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/Services", changefreq: "monthly", priority: 0.8 },
  { url: "/CareRemovals", changefreq: "monthly", priority: 0.8 },
  { url: "/CareBondCleaning", changefreq: "monthly", priority: 0.8 },
  { url: "/CareCarpetCleaning", changefreq: "monthly", priority: 0.8 },
  { url: "/CareTilesGroutCleaning", changefreq: "monthly", priority: 0.8 },
  { url: "/CareHandyman", changefreq: "monthly", priority: 0.8 },
  { url: "/CarePlumbers", changefreq: "monthly", priority: 0.8 },
  { url: "/CareGardening", changefreq: "monthly", priority: 0.8 },
  { url: "/CareElectrician", changefreq: "monthly", priority: 0.8 },
  { url: "/CareLocksmith", changefreq: "monthly", priority: 0.8 },
  { url: "/AboutUs", changefreq: "monthly", priority: 0.8 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});
// Write sitemap to public directory
fs.writeFileSync("./public/sitemap.xml", sitemapInstance.toString());
