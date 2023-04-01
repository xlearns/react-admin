import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { wrapperEnv } from "./src/utils/vite";

export default defineConfig((mode) => {
	const env = loadEnv(mode.mode, process.cwd());
	const viteEnv = wrapperEnv(env);
	console.log(resolve);
	return {
		plugins: [react()],
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src"),
			},
		},
		server: {
			host: "0.0.0.0",
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
		},
	};
});
