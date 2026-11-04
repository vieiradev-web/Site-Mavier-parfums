// Confere se toda imagem usada no código ("./image/..." ou "./images/...") existe na pasta public.
// Uso: npm run check:images
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const srcDir = path.join(root, 'src');
const publicDir = fs.existsSync(path.join(root, 'public')) ? path.join(root, 'public') : root;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const used = new Set();
for (const file of walk(srcDir).filter((f) => /\.(tsx?|css)$/.test(f))) {
  const text = fs.readFileSync(file, 'utf-8');
  for (const match of text.matchAll(/['"`]\.\/(images?\/[^'"`$]+)['"`]/g)) {
    used.add(match[1]);
  }
}

const missing = [];
for (const rel of [...used].sort()) {
  const dir = path.join(publicDir, path.dirname(rel));
  const name = path.basename(rel);
  // Compara o nome exato (maiúsculas/minúsculas contam no GitHub Pages)
  const existing = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  if (!existing.includes(name)) {
    const similar = existing.find((f) => f.toLowerCase() === name.toLowerCase());
    missing.push(similar ? `${rel}  (existe como "${similar}": diferença de maiúsculas/minúsculas)` : rel);
  }
}

console.log(`Imagens usadas no código: ${used.size}`);
if (missing.length === 0) {
  console.log('Tudo certo: todas as imagens foram encontradas.');
} else {
  console.log(`\nFaltando (${missing.length}):`);
  missing.forEach((m) => console.log(' - ' + m));
  process.exit(1);
}
