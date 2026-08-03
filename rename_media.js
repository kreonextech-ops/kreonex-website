const fs = require('fs');
const path = require('path');

const dirs = [
  'public/media/videos',
  'public/media/images',
  'public/media/bts',
  'public/media/AI'
];

let allAssets = [];

function sanitizeName(name) {
  // Keep extension intact
  const ext = path.extname(name);
  const base = path.basename(name, ext);
  
  // Replace spaces and special characters with underscore
  let cleanBase = base.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
  return cleanBase + ext;
}

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) return;
  
  const files = fs.readdirSync(fullPath);
  files.forEach(file => {
    const oldPath = path.join(fullPath, file);
    const newName = sanitizeName(file);
    const newPath = path.join(fullPath, newName);
    
    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} -> ${newName}`);
    }
    
    // Determine category based on dir
    let label = 'Studio';
    if (dir.includes('videos')) label = 'Commercial';
    if (dir.includes('bts')) label = 'BTS';
    if (dir.includes('AI')) label = 'AI Generated';
    
    const isVideo = newName.endsWith('.mp4') || newName.endsWith('.webm') || newName.endsWith('.mov');
    
    allAssets.push(`  { type: '${isVideo ? 'video' : 'image'}', src: '/${dir.replace('public/', '')}/${newName}', label: '${label}' }`);
  });
});

const fileContent = `export const mediaAssets = [\n${allAssets.join(',\n')}\n];\n\nexport const shuffleAssets = () => {\n  const shuffled = [...mediaAssets];\n  for (let i = shuffled.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];\n  }\n  return shuffled;\n};\n`;

fs.writeFileSync(path.join(__dirname, 'src/data/mediaAssets.js'), fileContent);
console.log('Successfully updated src/data/mediaAssets.js');
