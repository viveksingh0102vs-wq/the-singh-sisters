const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'universities');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const universities = [
  {
    name: 'harvard',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85',
    title: 'Harvard University',
    location: 'Cambridge, Massachusetts, USA'
  },
  {
    name: 'oxford',
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85',
    title: 'University of Oxford',
    location: 'Oxford, United Kingdom'
  },
  {
    name: 'stanford',
    url: 'https://images.unsplash.com/photo-1583373834259-46cc92173ca7?auto=format&fit=crop&w=2000&q=85',
    title: 'Stanford University',
    location: 'Stanford, California, USA'
  },
  {
    name: 'cambridge',
    url: 'https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=2000&q=85',
    title: 'University of Cambridge',
    location: 'Cambridge, United Kingdom'
  },
  {
    name: 'mit',
    url: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2000&q=85',
    title: 'Massachusetts Institute of Technology (MIT)',
    location: 'Cambridge, Massachusetts, USA'
  },
  {
    name: 'eth-zurich',
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=85',
    title: 'ETH Zurich',
    location: 'Zurich, Switzerland'
  },
  {
    name: 'tokyo',
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=85',
    title: 'University of Tokyo',
    location: 'Tokyo, Japan'
  },
  {
    name: 'nus',
    url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=2000&q=85',
    title: 'National University of Singapore',
    location: 'Singapore'
  }
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const request = (targetUrl) => {
      https.get(targetUrl, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          request(response.headers.location);
          return;
        }
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download image, status code: ${response.statusCode}`));
          return;
        }
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }).on('error', (err) => {
        fs.unlink(filepath, () => reject(err));
      });
    };
    request(url);
  });
}

async function run() {
  console.log('Downloading top university photos...');
  for (const uni of universities) {
    const dest = path.join(outputDir, `${uni.name}.jpg`);
    try {
      await downloadImage(uni.url, dest);
      const stat = fs.statSync(dest);
      console.log(`Saved ${uni.title} (${stat.size} bytes) -> ${dest}`);
    } catch (err) {
      console.error(`Error downloading ${uni.name}:`, err.message);
    }
  }
  console.log('Done!');
}

run();
