import * as React from "react";
import CountrySelectors from "./CountrySelectors";
import ControlPanelFilters from "./ControlPanelFilters";
import styler from "./Content.module.scss";
import MainTable from "../MainTable/MainTable"

export default function Content(props) {

	return (
		<div className={styler['content']}>
			<div className={styler["control-panel"]}>
				<CountrySelectors />
                <ControlPanelFilters />
			</div>
            <MainTable />
		</div>
	);
}
