const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'universities');
const tokyoFile = path.join(targetDir, 'tokyo.jpg');
if (fs.existsSync(tokyoFile) && fs.statSync(tokyoFile).size === 0) {
  fs.unlinkSync(tokyoFile);
}

const extras = [
  {
    name: 'imperial',
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=85'
  },
  {
    name: 'tokyo',
    url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=2000&q=85'
  }
];

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const get = (u) => {
      https.get(u, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Status ${res.statusCode}`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      }).on('error', err => fs.unlink(filepath, () => reject(err)));
    };
    get(url);
  });
}

async function run() {
  for (const item of extras) {
    const dest = path.join(targetDir, `${item.name}.jpg`);
    try {
      await download(item.url, dest);
      console.log(`Downloaded ${item.name}.jpg`);
    } catch(e) {
      console.error(e);
    }
  }
}
run();
