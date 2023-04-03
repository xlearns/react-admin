import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { wrapperEnv } from "./src/utils/vite";

export default defineConfig((mode) => {
	const env = loadEnv(mode.mode, process.cwd());
	const viteEnv = wrapperEnv(env);
	const root = process.cwd();
	return {
		base: viteEnv.VITE_PUBLIC_PATH,
		root,
		plugins: [react()],
		optimizeDeps: {
			include: [
				"react",
				"react-dom",
				"react-router-dom",
				"@ant-design/icons",
				"antd",
				"antd/es/alert/style",
				"antd/es/breadcrumb/style",
				"antd/es/button/style",
				"antd/es/card/style",
				"antd/es/checkbox/style",
				"antd/es/empty/style",
				"antd/es/form/style",
				"antd/es/input/style",
				"antd/es/menu/style",
				"antd/es/message/style",
				"antd/es/notification/style",
				"antd/es/result/style",
				"antd/es/spin/style",
				"antd/es/statistic/style",
				"antd/es/switch/style",
				"antd/es/tabs/style",
				"antd/es/tag/style",
				"antd/es/upload/style",
			],
		},
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
