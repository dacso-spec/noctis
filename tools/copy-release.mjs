import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, rmSync } from 'fs';
import { join, dirname, extname } from 'path';

function copyFile(src, dest) {
  try {
    // Ensure destination directory exists
    const destDir = dirname(dest);
    mkdirSync(destDir, { recursive: true });
    
    const content = readFileSync(src);
    writeFileSync(dest, content);
    return true;
  } catch (error) {
    console.error(`Error copying ${src} to ${dest}:`, error.message);
    return false;
  }
}

function getAllFiles(dir, fileList = [], baseDir = dir) {
  const files = readdirSync(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    
    // Skip node_modules and dist
    if (file === 'node_modules' || file === 'dist' || filePath.includes('node_modules')) {
      continue;
    }
    
    try {
      const stat = statSync(filePath);
      if (stat.isDirectory()) {
        getAllFiles(filePath, fileList, baseDir);
      } else {
        const relPath = filePath.replace(baseDir + '/', '');
        fileList.push({ full: filePath, rel: relPath });
      }
    } catch (e) {
      // Skip files we can't access
    }
  }
  
  return fileList;
}

function shouldCopyFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  const name = filePath.toLowerCase();
  
  // Copy HTML files
  if (ext === '.html') return true;
  
  // Copy assets
  if (filePath.includes('/css/') || filePath.includes('/js/') || 
      filePath.includes('/assets/') || filePath.includes('/images/') ||
      filePath.includes('/fonts/') || filePath.includes('/Your paragraph text/')) {
    return true;
  }
  
  // Copy specific files
  if (name.includes('favicon') || name === 'robots.txt' || 
      name === 'sitemap.xml' || name === 'cname') {
    return true;
  }
  
  // Copy image files
  if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico'].includes(ext)) {
    return true;
  }
  
  return false;
}

// Clean dist directory
console.log('Cleaning dist directory...');
try {
  rmSync('dist', { recursive: true, force: true });
  mkdirSync('dist', { recursive: true });
} catch (e) {
  console.log('Dist directory already clean or does not exist');
}

// Copy files from root directory (files are now at root)
console.log('Copying files from root directory...');
const srcDir = '.';
const files = getAllFiles(srcDir);

let copied = 0;
for (const file of files) {
  if (shouldCopyFile(file.rel)) {
    const destPath = join('dist', file.rel);
    if (copyFile(file.full, destPath)) {
      copied++;
    }
  }
}

// Copy root-level files
console.log('Copying root-level files...');
const rootFiles = ['robots.txt', 'sitemap.xml', '404.html', 'checkout.html'];
for (const file of rootFiles) {
  try {
    if (statSync(file).isFile()) {
      copyFile(file, join('dist', file));
      copied++;
    }
  } catch (e) {
    // File doesn't exist, skip
  }
}

console.log(`\nCopied ${copied} files to dist directory.`);

