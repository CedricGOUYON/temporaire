import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { createDatabaseIfNotExists } from "../db/src/createDatabase";
import { initDB } from "./initDB";

// Charger .env
dotenv.config();

// 🔍 Obtenir dynamiquement le nom du dossier racine (ex: app_poulet)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootFolder = path.basename(path.resolve(__dirname, "../../../"));

// Surcharger la variable d'environnement DB_NAME
process.env.DB_NAME = rootFolder;

// Créer la base si elle n'existe pas
await createDatabaseIfNotExists();

// Créer la connexion MySQL
export const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log(`🗄️ using database ${process.env.DB_NAME}`);

// Initialiser les tables
await initDB();
