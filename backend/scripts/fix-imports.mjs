import fs from "fs";
import path from "path";

const root = path.resolve(process.cwd(), "src");

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let updated = content.replace(
    /from\s+["'](\..*?)(["']);/g,
    (match, p1, p2) => {
      if (!p1.endsWith(".ts") && !p1.endsWith(".js")) {
        return `from "${p1}.ts"${p2};`;
      }
      return match;
    }
  );

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, "utf8");
    console.log(`✅ Fixed: ${filePath}`);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(entryPath);
    else if (entry.isFile() && entry.name.endsWith(".ts")) fixFile(entryPath);
  }
}

console.log("🔧 Fixing imports...");
walk(root);
console.log("✨ Done!");
