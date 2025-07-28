import fs from "node:fs";
import path from "node:path";

const ROOT_FOLDER_NAME = path.basename(path.resolve());

const packageJsonPath = path.resolve("package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
packageJson.name = ROOT_FOLDER_NAME;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");
console.log(`✅ package.json mis à jour avec name: "${ROOT_FOLDER_NAME}"`);

const constantsPath = path.resolve("setup", "constants.ts");
let constantsContent = fs.readFileSync(constantsPath, "utf8");
constantsContent = constantsContent.replace(/const\s+ROOT_FOLDER_NAME\s*=\s*".*?";/, `const ROOT_FOLDER_NAME = "${ROOT_FOLDER_NAME}";`);
fs.writeFileSync(constantsPath, constantsContent, "utf8");
console.log(`✅ constants.ts mis à jour avec ROOT_FOLDER_NAME = "${ROOT_FOLDER_NAME}"`);
