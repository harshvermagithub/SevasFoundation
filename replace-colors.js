const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace white text with muted text
      content = content.replace(/rgba\(255, 255, 255, 0\.\d+\)/g, 'var(--text-muted)');
      content = content.replace(/rgba\(255,255,255,0\.\d+\)/g, 'var(--text-muted)');
      content = content.replace(/rgba\(255, 255, 255, 1\)/g, 'var(--foreground)');
      content = content.replace(/#ffffff/g, 'var(--foreground)');
      content = content.replace(/#fff/g, 'var(--foreground)');
      
      // Some dark backgrounds also need to change
      content = content.replace(/rgba\(0, 0, 0, 0\.2\)/g, 'var(--glass-bg)');
      content = content.replace(/rgba\(0, 0, 0, 0\.85\)/g, 'var(--glass-bg)');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInDir('./src/components');
console.log('Replaced colors in components.');
