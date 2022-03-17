import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import styler from "./Content.module.scss";
import axios from "axios";

const useStyles = makeStyles(() => ({
	menuPaper: {
		maxHeight: 100,
	},
}));

export default function CountrySelectors(props) {
	var [countryList, setCountryList] = React.useState([]);
	var [selectedKnowCountry, setSelectedKnowCountry] = React.useState("");
	var [selectedDestinationCountry, setSelectedDestinationCountry] = React.useState("");
	const classes = useStyles();

	React.useEffect(() => {
		axios.get("http://127.0.0.1:4000/api/getCountriesTable").then((response) => {
			setCountryList(response.data);
		});
	}, []);

	return (
		<div className={styler["country-selectors"]}>
			<FormControl variant="filled" sx={{ m: 1 }} fullWidth={true}>
				<InputLabel id="country-know-rules-label">Choose the country in wich you know the rules</InputLabel>
				<Select
					labelId="country-know-rules-label"
					id="country-know-rules"
					value={selectedKnowCountry}
					style={{ backgroundColor: "#fff" }}
					MenuProps={{ classes: { paper: classes.menuPaper } }}
					onChange={(event) => {
						props.selectKnowCountry(event.target.value);
						setSelectedKnowCountry(event.target.value);
					}}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{countryList &&
						countryList.map((item) => (
							<MenuItem key={item.id} value={item.Country}>
								{item.Country}
							</MenuItem>
						))}
				</Select>
			</FormControl>

			<FormControl variant="filled" sx={{ m: 1 }} fullWidth={true}>
				<InputLabel id="country-destination-label">Choose the country of your destination</InputLabel>
				<Select
					labelId="country-destination-label"
					id="demo-simple-select-helper"
					value={selectedDestinationCountry}
					style={{ backgroundColor: "#fff" }}
					MenuProps={{ classes: { paper: classes.menuPaper } }}
					onChange={(event) => {
						props.selectDestinationCountry(event.target.value);
						setSelectedDestinationCountry(event.target.value);
					}}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{countryList &&
						countryList.map((item) => (
							<MenuItem key={item.id} value={item.Country}>
								{item.Country}
							</MenuItem>
						))}
				</Select>
			</FormControl>
		</div>
	);
}
