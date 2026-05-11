import fs from 'node:fs';
import path from 'node:path';

const resourcesDir = './src/resources';

for (const versionDir of fs.readdirSync(resourcesDir)) {
  if (!versionDir || !versionDir[0]) continue;

  const versionPath = path.join(resourcesDir, versionDir);
  if (!fs.statSync(versionPath).isDirectory()) continue;

  const versionPrefix = versionDir[0].toUpperCase() + versionDir.slice(1);
  const resources: Array<{
    exportName: string;
    key: string;
    importPath: string;
  }> = [];

  for (const file of fs.readdirSync(versionPath).sort()) {
    if (!file.endsWith('.ts') || file === 'index.ts' || file === 'constants.ts')
      continue;

    const content = fs.readFileSync(path.join(versionPath, file), 'utf-8');
    const match = content.match(
      new RegExp(`export function (${versionPrefix}(\\w+)Resource)`)
    );
    if (!match) continue;

    const exportName = match[1];
    const middle = match[2];
    if (!exportName || !middle || !middle[0]) continue;

    const key = middle[0].toLowerCase() + middle.slice(1);
    resources.push({
      exportName,
      key,
      importPath: `./${file.replace('.ts', '.js')}`,
    });
  }

  if (resources.length === 0) continue;

  const createFn = `create${versionPrefix}Resources`;
  const typeName = `${versionPrefix}Resources`;

  const imports = resources
    .map((r) => `import { ${r.exportName} } from '${r.importPath}';`)
    .join('\n');

  const returnEntries = resources
    .map((r) => `    ${r.key}: ${r.exportName}(request),`)
    .join('\n');

  const output =
    `import type { RequestFunction } from '../../types/common.js';\n` +
    `${imports}\n` +
    `\n` +
    `export function ${createFn}(request: RequestFunction) {\n` +
    `  return {\n` +
    `${returnEntries}\n` +
    `  };\n` +
    `}\n` +
    `\n` +
    `export type ${typeName} = ReturnType<typeof ${createFn}>;\n`;

  fs.writeFileSync(path.join(versionPath, 'index.ts'), output);
  console.log(
    `Generated ${versionDir}/index.ts (${resources.length} resource${resources.length === 1 ? '' : 's'})`
  );
}
