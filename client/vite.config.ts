import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { constants } from "../setup/constants";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(`
=========================
✅ CLIENT
=========================
`);
  console.log(`Projet     : ${constants.ROOT_FOLDER_NAME}`);
  console.log(`API        : ${env.VITE_API_URL}`);
  console.log(`DOTENV     : Variables injectées depuis .env`);

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    define: {
      "import.meta.env.VITE_PROJECT_NAME": JSON.stringify(constants.ROOT_FOLDER_NAME),
    },
  };
});
