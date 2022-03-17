import * as React from "react";
import CountrySelectors from "./CountrySelectors";
import ControlPanelFilters from "./ControlPanelFilters";
import styler from "./Content.module.scss";
import MainTable from "../MainTable/MainTable"

export default function Content(props) {

    const [selectedKnowCountry, setSelectedKnowCountry] = React.useState('');
    const [selectedDestinationCountry, setSelectedDestinationCountry] = React.useState('');

    function selectKnowCountry(country){
        setSelectedKnowCountry(country);
    }

    function selectDestinationCountry(country){
        setSelectedDestinationCountry(country);
    }

	return (
		<div className={styler['content']}>
			<div className={styler["control-panel"]}>
				<CountrySelectors selectKnowCountry={selectKnowCountry} selectDestinationCountry={selectDestinationCountry}/>
                <ControlPanelFilters />
			</div>
            <MainTable knowCountry={selectedKnowCountry} destinationCountry={selectedDestinationCountry}/>
		</div>
	);
}
