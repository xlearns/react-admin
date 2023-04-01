import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import Home from "@/views/home";
// const metaRouters = import.meta.globEager("./modules/*.tsx");

/**
 * 基本路由配置
 * @param {string} path 路径
 * @param {string} element 组件的页面
 */

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "*",
		element: <div>404</div>,
	},
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
