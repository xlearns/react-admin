import React, { useState } from "react";
import { ConfigProvider } from "antd";
import { HashRouter } from "react-router-dom";
import zhCN from "antd/lib/locale/zh_CN";
import Router from "@/routers/index";

function App() {
	return (
		<HashRouter>
			<ConfigProvider locale={zhCN}>
				<Router />
			</ConfigProvider>
		</HashRouter>
	);
}

export default App;
