const SitemapGenerator = require("sitemap-generator");

// Replace the URL with your production URL
const targetUrl = "https://www.gspropertycare.com.au/";

// Output directory for the sitemap file
const outputDir = "./public";

// Create a new sitemap generator
const generator = SitemapGenerator(targetUrl, {
  stripQuerystring: false,
  filepath: `${outputDir}/sitemap.xml`, // Output file path
});

// Register event listeners
generator.on("done", () => {
  console.log("Sitemap generated successfully");
});

generator.on("error", (error) => {
  console.error(`Error generating sitemap: ${error}`);
});

// Start the generation process
generator.start();
