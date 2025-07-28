// 📦 Modules natifs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ⛔ Désactive les logs si REPORT_SILENT=true
const silent = process.env.REPORT_SILENT === "true";
const log = (...args) => {
  if (!silent) console.log(...args);
};

// 📍 Résolution de __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📁 Chemins
const CONSTANTS_PATH = path.resolve(__dirname, "constants.ts");
const PROJECT_ROOT = path.resolve(__dirname, "..");

// 📄 Lecture brute du fichier constants.ts
const constantsContentRaw = fs.readFileSync(CONSTANTS_PATH, "utf8");

// 🔍 Extraction robuste de toutes les clés de l'objet constants
const constantsToTrack = [];
let insideConstantsObject = false;

for (const line of constantsContentRaw.split("\n")) {
  const trimmed = line.trim();

  if (trimmed.startsWith("export const constants")) {
    insideConstantsObject = true;
    continue;
  }

  if (insideConstantsObject) {
    if (trimmed.startsWith("};") || trimmed.startsWith("}")) {
      break;
    }

    const match = trimmed.match(/^(\w+)\s*[:,]?/);
    if (match) {
      constantsToTrack.push(match[1]);
    }
  }
}

// 📊 Initialisation du rapport
const usageReport = Object.fromEntries(constantsToTrack.map((key) => [key, 0]));
let globalTotal = 0;

// 🧠 Fichiers binaires à ignorer
function isBinary(buffer) {
  return buffer.includes(0);
}

// 🚶‍♂️ Parcours récursif des fichiers du projet
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (["node_modules", ".git", "dist", "build"].includes(entry.name)) continue;
      walk(fullPath);
    } else if (entry.isFile()) {
      if ([__filename, CONSTANTS_PATH].includes(fullPath)) continue;

      const buffer = fs.readFileSync(fullPath);
      if (isBinary(buffer)) continue;

      const content = buffer.toString("utf8");

      constantsToTrack.forEach((name) => {
        const regex = new RegExp(`\\b${name}\\b`, "g");
        const count = (content.match(regex) || []).length;
        usageReport[name] += count;
        globalTotal += count;
      });
    }
  }
}

// ▶️ Lancement du scan
walk(PROJECT_ROOT);

// 📋 Affichage du rapport dans le terminal
log("\n📊 Rapport d’utilisation des constantes (toutes occurrences) :");
Object.entries(usageReport)
  .sort(([, a], [, b]) => b - a)
  .forEach(([key, count]) => log(`  ${key} → ${count}`));

const totalConstants = constantsToTrack.length;
log(`\n🔢 Total global : ${globalTotal}`);
log(`🔍 ${totalConstants} constantes analysées.`);
log(`🧮 ${globalTotal} occurrences trouvées.\n`);

// 🧹 Suppression de l’ancien bloc de rapport
const constantsContentClean = constantsContentRaw.replace(/\/\* ---- Rapport[\s\S]*?\*\/\n*/g, "");

// 🧾 Génération du nouveau rapport à injecter
const reportLines = [
  "",
  "/* ---- Rapport d’utilisation des constantes (toutes occurrences) ----",
  ...Object.entries(usageReport)
    .sort(([, a], [, b]) => b - a)
    .map(([key, count]) => `  ${key} → ${count}`),
  `  TOTAL_CONSTANTES_UNIQUES → ${totalConstants}`,
  `  TOTAL_OCCURRENCES → ${globalTotal}`,
  "--------------------------------------------- */",
  "",
];

const newConstantsContent = constantsContentClean + reportLines.join("\n");

// 🖋 Injection du rapport dans le fichier constants.ts
fs.writeFileSync(CONSTANTS_PATH, newConstantsContent, "utf8");
log("✅ Rapport mis à jour et injecté dans constants.ts !");
