import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import styler from "./Content.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	setKnowCountry,
	response,
	setDataTable,
	filterParams,
	setDestinationCountry,
} from "../Content/reducers/index";

const useStyles = makeStyles(() => ({
	menuPaper: {
		maxHeight: 100,
	},
}));

export default function CountrySelectors() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const countryList = useSelector(response).data;

	return (
		<div className={styler["country-selectors"]}>
			<FormControl variant="filled" sx={{ m: 1 }} fullWidth={true}>
				<InputLabel id="country-know-rules-label">Choose the country in wich you know the rules</InputLabel>
				<Select
					labelId="country-know-rules-label"
					id="country-know-rules"
					value={useSelector(filterParams).knowCountry}
					style={{ backgroundColor: "#fff" }}
					MenuProps={{ classes: { paper: classes.menuPaper } }}
					onChange={(event) => {
						dispatch(setKnowCountry(event.target.value));
						dispatch(setDataTable());
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
					value={useSelector(filterParams).destinationCountry}
					style={{ backgroundColor: "#fff" }}
					MenuProps={{ classes: { paper: classes.menuPaper } }}
					onChange={(event) => {
						dispatch(setDestinationCountry(event.target.value));
						dispatch(setDataTable());
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
