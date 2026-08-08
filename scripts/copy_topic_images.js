const fs = require('fs');
const path = require('path');

const brainDir = `C:\\Users\\pc\\.gemini\\antigravity\\brain\\d7cad822-ac41-4f0c-9140-ee6a5050d211`;
const targetDir = path.join(__dirname, '..', 'public', 'images');

const files = fs.readdirSync(brainDir);
files.forEach(file => {
  if (file.startsWith('scholarship_guidance')) {
    fs.copyFileSync(path.join(brainDir, file), path.join(targetDir, 'scholarship-guidance-hero.jpg'));
    console.log(`Copied ${file} -> scholarship-guidance-hero.jpg`);
  }
  if (file.startsWith('academic_services')) {
    fs.copyFileSync(path.join(brainDir, file), path.join(targetDir, 'academic-pathways-hero.jpg'));
    console.log(`Copied ${file} -> academic-pathways-hero.jpg`);
  }
  if (file.startsWith('personalized_mentorship')) {
    fs.copyFileSync(path.join(brainDir, file), path.join(targetDir, 'personalized-mentorship-hero.jpg'));
    console.log(`Copied ${file} -> personalized-mentorship-hero.jpg`);
  }
});
