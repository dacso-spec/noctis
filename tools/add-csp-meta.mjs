import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const CSP_META = '<meta http-equiv="Content-Security-Policy" content="frame-ancestors \'self\' https://your-portfolio.example https://*.your-company.com">';

function getAllHtmlFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    
    // Skip node_modules and dist/node_modules
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

function addCSPMeta(filePath) {
  try {
    let content = readFileSync(filePath, 'utf8');
    
    // Check if CSP meta already exists
    if (content.includes('frame-ancestors')) {
      return false;
    }
    
    // Find <head> section
    const headMatch = content.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    if (!headMatch) {
      return false;
    }
    
    const headContent = headMatch[1];
    const headStart = content.indexOf('<head');
    const headEnd = content.indexOf('</head>', headStart) + 7;
    
    // Find all meta tags in head
    const metaRegex = /<meta[^>]*>/gi;
    const metaMatches = [];
    let match;
    while ((match = metaRegex.exec(headContent)) !== null) {
      metaMatches.push({
        index: match.index,
        length: match[0].length,
        full: match[0]
      });
    }
    
    if (metaMatches.length === 0) {
      // Insert after <head> tag
      const insertPos = content.indexOf('>', headStart) + 1;
      const indent = '    ';
      content = content.substring(0, insertPos) + '\n' + indent + CSP_META + content.substring(insertPos);
    } else {
      // Find last meta tag position relative to document
      const lastMeta = metaMatches[metaMatches.length - 1];
      const lastMetaEnd = headStart + content.substring(headStart, headEnd).indexOf(headContent) + lastMeta.index + lastMeta.length;
      
      // Find where to insert (after last meta, before next tag or end of head)
      const afterMeta = content.substring(lastMetaEnd);
      const nextTagMatch = afterMeta.match(/^\s*<[^\/]/);
      const insertPos = lastMetaEnd + (nextTagMatch ? nextTagMatch.index + nextTagMatch[0].match(/^\s*/)[0].length : 0);
      
      // Get indentation from last meta
      const indentMatch = lastMeta.full.match(/^(\s*)/);
      const indent = indentMatch ? indentMatch[1] : '    ';
      
      content = content.substring(0, insertPos) + '\n' + indent + CSP_META + content.substring(insertPos);
    }
    
    writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all HTML files
const htmlFiles = getAllHtmlFiles('.');

let count = 0;
for (const file of htmlFiles) {
  if (addCSPMeta(file)) {
    count++;
    console.log(`Added CSP meta to ${file}`);
  }
}

console.log(`\nProcessed ${count} HTML files.`);
