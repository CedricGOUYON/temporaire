import fs from "node:fs";
import path from "node:path";

// Récupère le nom du dossier racine (ex: app_poulet)
const rootFolderName = path.basename(path.resolve());

// Chemin vers le package.json à la racine
const packageJsonPath = path.resolve("package.json");

// Lire le package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Modifier le nom avec le nom du dossier racine
packageJson.name = rootFolderName;

// Écrire les changements dans package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");

console.log(`✅ package.json mis à jour avec name: "${rootFolderName}"`);
