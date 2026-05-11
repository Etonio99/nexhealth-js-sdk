import fs from 'node:fs';
import path from 'node:path';

function processFile(file: string) {
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(/.\/[a-zA-Z0-9_/]+/g, (match) => `${match}.js`);
  content = content.replace(
    /export \* from '\.\/([^/]+)\/index\.js'/g,
    "export * as $1 from './$1/index.js'"
  );

  fs.writeFileSync(file, content);
}

function walk(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name === 'index.ts') {
      processFile(full);
    }
  }
}

walk('./src/types');
