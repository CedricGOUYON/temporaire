// Importez simplement `constants` où vous en avez besoin pour garantir une cohérence et faciliter la maintenance.
// import { constants } from "../../../../setup/constants"

const ROOT_FOLDER_NAME = "app_poulet";

export const constants = {
  ROOT_FOLDER_NAME,
  APP_NAME: ROOT_FOLDER_NAME,

  //  Defaults utilisateur
  DEFAULT_USER_NAME: "utilisateur",
  DEFAULT_AVATAR: "/images/avatar_profil.png",

  //  Routing
  ROUTE_HOME: "/",
  ROUTE_LOGIN: "/login",
  ROUTE_AUTH: "/auth",
  ROUTE_DASHBOARD: "/dashboard",
  ROUTE_CONTACT: "/contact",

  //  Textes par défaut
  TEXT_WELCOME: "Bienvenue",
  TEXT_LOGOUT: "Se déconnecter",
  TEXT_LOGIN: "Se connecter",
  TEXT_SEARCH_PLACEHOLDER: "Rechercher...",

  //  Configuration générale
  DEFAULT_LANGUAGE: "fr",
  DEFAULT_THEME: "light",
  DEFAULT_TIMEOUT: 10000,
  DEFAULT_PAGE_SIZE: 10,

  // 🔌 API
  API_BASE_URL: "http://localhost:3310/api",
  API_AUTH_ENDPOINT: "/auth",
};



/* ---- Rapport d’utilisation des constantes (toutes occurrences) ----
  ROOT_FOLDER_NAME → 11
  APP_NAME → 4
  DEFAULT_USER_NAME → 0
  DEFAULT_AVATAR → 0
  ROUTE_HOME → 0
  ROUTE_LOGIN → 0
  ROUTE_AUTH → 0
  ROUTE_DASHBOARD → 0
  ROUTE_CONTACT → 0
  TEXT_WELCOME → 0
  TEXT_LOGOUT → 0
  TEXT_LOGIN → 0
  TEXT_SEARCH_PLACEHOLDER → 0
  DEFAULT_LANGUAGE → 0
  DEFAULT_THEME → 0
  DEFAULT_TIMEOUT → 0
  DEFAULT_PAGE_SIZE → 0
  API_BASE_URL → 0
  API_AUTH_ENDPOINT → 0
  TOTAL_CONSTANTES_UNIQUES → 19
  TOTAL_OCCURRENCES → 15
--------------------------------------------- */
