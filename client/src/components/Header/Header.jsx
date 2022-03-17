import * as React from "react";
import styler from "./Header.module.scss";

export default function MyComponent(props) {
	return (
		<header className={styler["header"]}>
			<div className={styler["header-title"]}>Compare traffic rules you know and those in your destination</div>
		</header>
	);
}
