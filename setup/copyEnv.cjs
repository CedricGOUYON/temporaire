const fs = require("node:fs");
const path = require("node:path");

const folders = ["client/src", "server", "."]; // 🔧 adapte selon ton architecture

folders.forEach((folder) => {
	const samplePath = path.join(folder, ".env.sample");
	const targetPath = path.join(folder, ".env");

	if (fs.existsSync(samplePath)) {
		fs.copyFileSync(samplePath, targetPath);
		console.log(`✅ Copié : ${samplePath} → ${targetPath}`);
	} else {
		console.warn(`⚠️ Aucun fichier trouvé : ${samplePath}`);
	}
});
