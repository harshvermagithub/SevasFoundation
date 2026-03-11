const fs = require('fs');
const path = require('path');

function fixBgs(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixBgs(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/rgba\(255,255,255,0\.02\)/g, 'rgba(0,0,0,0.03)');
      // we also need to add the <img src="/logo_white.png" /> if possible
      fs.writeFileSync(fullPath, content);
    }
  }
}

fixBgs('./src/components');
