const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 }, // تنها صفحه اصلی
];

const sitemap = new SitemapStream({ hostname: 'https://esmatullah-mohammadi-weblog.vercel.app' });

streamToPromise(sitemap)
  .then((data) => {
    fs.writeFileSync(
      path.join(__dirname, 'public', 'sitemap.xml'),
      data
    );
    console.log('✅ Sitemap successfully created!');
  })
  .catch((err) => console.error('❌ Error generating sitemap:', err));

links.forEach((link) => sitemap.write(link));
sitemap.end();
