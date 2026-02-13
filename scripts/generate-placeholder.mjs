import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("dist", { recursive: true });

const now = new Date().toISOString();

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="220" viewBox="0 0 900 220">
  <defs>
    <style>
      text { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    </style>
  </defs>

  <rect x="0" y="0" width="900" height="220" rx="18" />
  <text x="24" y="54" font-size="28">⛏️ Minecraft miner (placeholder)</text>
  <text x="24" y="92" font-size="16">Dernière génération: ${now}</text>

  <!-- petite animation pour prouver que ça bouge -->
  <rect x="24" y="140" width="180" height="18" rx="9" />
  <circle cx="24" cy="149" r="9">
    <animate attributeName="cx" from="24" to="204" dur="1.4s" repeatCount="indefinite" />
  </circle>

  <text x="24" y="190" font-size="14">Étape suivante: on remplace ce SVG par le vrai rendu (GIF d'abord, puis SVG).</text>
</svg>
`;

writeFileSync("dist/miner.svg", svg, "utf8");
console.log("✅ dist/miner.svg généré");

