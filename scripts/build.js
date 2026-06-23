const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

function copy(relativePath) {
  const from = path.join(root, relativePath);
  const to = path.join(dist, relativePath);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.cpSync(from, to, { recursive: true });
}

fs.rmSync(dist, { force: true, recursive: true });
fs.mkdirSync(dist, { recursive: true });
["index.html", "styles.css", "apps.js", "main.js", "manifest.webmanifest", "assets"].forEach(copy);
fs.writeFileSync(path.join(dist, ".nojekyll"), "");
console.log("Build complete: dist/");
