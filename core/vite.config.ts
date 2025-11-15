import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { headCheckerPlugin } from "./src/.refunjs/plugins/headChecker";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), headCheckerPlugin()],
  server: { port: 5173 }
});
