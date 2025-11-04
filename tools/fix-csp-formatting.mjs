import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

function getAllHtmlFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    
    if (file === 'node_modules' || filePath.includes('node_modules')) {
      continue;
    }
    
    try {
      const stat = statSync(filePath);
      if (stat.isDirectory()) {
        getAllHtmlFiles(filePath, fileList);
      } else if (extname(file) === '.html') {
        fileList.push(filePath);
      }
    } catch (e) {
      // Skip files we can't access
    }
  }
  
  return fileList;
}

function fixCSPFormatting(filePath) {
  try {
    let content = readFileSync(filePath, 'utf8');
    
    // Fix CSP meta tag that's concatenated with next tag
    const pattern = /<meta http-equiv="Content-Security-Policy" content="frame-ancestors[^"]*"><([^\/])/g;
    const replacement = '<meta http-equiv="Content-Security-Policy" content="frame-ancestors \'self\' https://your-portfolio.example https://*.your-company.com">\n    <$1';
    
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    return false;
  }
}

const htmlFiles = getAllHtmlFiles('.');

let fixed = 0;
for (const file of htmlFiles) {
  if (fixCSPFormatting(file)) {
    fixed++;
    console.log(`Fixed formatting in ${file}`);
  }
}

console.log(`\nFixed formatting in ${fixed} files.`);

