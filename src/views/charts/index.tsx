import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Button, Space } from "antd";

export default function () {
	useEffect(() => {}, []);
	const [count, setCount] = useState(0);
	function init() {}
	useEffect(() => {
		init();
	}, []);
	return <div className="px-[24px] !pb-0"></div>;
}
