import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styler from "./Table.module.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { dataTable, setResponse } from "../Content/reducers/index";

function itemToRowTable(item, key, description) {
	return [key].concat(
		item.map((value) => {
			return value[key];
		})
	);
}

function selectCoutryFilter(response, knowCountry, destinationCountry) {
	if (knowCountry === "" && destinationCountry === "") return false;

	const data = response.data.filter((item) => {
		return item.Country === knowCountry || item.Country === destinationCountry;
	});

	return {
		header: [knowCountry, destinationCountry],
		content: [
			itemToRowTable(data, "Spare_bulb_required"),
			itemToRowTable(data, "Speed_limit_on_motorway_kmh"),
			itemToRowTable(data, "Speed_limit_on_dual_carriageway_kmh"),
			itemToRowTable(data, "Seatbelt_required"),
			itemToRowTable(data, "Speed_limit_on_single_carriageway_kmh"),
			itemToRowTable(data, "Tow_rope_required"),
		],
	};
}

export default function MainTable() {
	const dispatch = useDispatch();
	const data = useSelector(dataTable);

	React.useEffect(() => {
		axios.get("http://127.0.0.1:4000/api/getCountriesTable").then((response) => {
			dispatch(setResponse(response));
		});
	}, [dispatch]);

	return (
		<div className={styler["main-datatable-block"]}>
			<TableContainer component={Paper} className={styler["main-datatable-container"]}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="left">Params</TableCell>
							{data && data.header.map((row) => <TableCell key={row}>{row}</TableCell>)}
						</TableRow>
					</TableHead>

					<TableBody>
						{data &&
							data.content.map((row) => (
								<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									{row.map((row) => (
										<TableCell align="left">{row}</TableCell>
									))}
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
