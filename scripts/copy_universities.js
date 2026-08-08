const fs = require('fs');
const path = require('path');

const brainDir = `C:\\Users\\pc\\.gemini\\antigravity\\brain\\d7cad822-ac41-4f0c-9140-ee6a5050d211`;
const targetDir = path.join(__dirname, '..', 'public', 'images', 'universities');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(brainDir);
files.forEach(file => {
  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    let targetName = file;
    if (file.startsWith('harvard_university')) targetName = 'harvard.jpg';
    if (file.startsWith('oxford_university')) targetName = 'oxford.jpg';
    if (file.startsWith('stanford_university')) targetName = 'stanford.jpg';
    if (file.startsWith('cambridge_university')) targetName = 'cambridge.jpg';
    if (file.startsWith('mit_university')) targetName = 'mit.jpg';
    if (file.startsWith('eth_zurich')) targetName = 'eth-zurich.jpg';

    const src = path.join(brainDir, file);
    const dest = path.join(targetDir, targetName);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} -> ${targetName}`);
  }
});
