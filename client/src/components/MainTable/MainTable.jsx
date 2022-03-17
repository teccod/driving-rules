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

function itemToRowTable(item, key, description) {
	return [key].concat(
		item.map((value) => {
			return value[key];
		})
	);
}

function selectCoutryFilter(response, knowCountry, destinationCountry) {
	if (knowCountry === "" && destinationCountry === "") return false;

	const data = (response.data).filter(item => {
		return item.Country === knowCountry || item.Country === destinationCountry
	});

	return {
		header: [
			knowCountry,
			destinationCountry
		],
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

export default class MainTable extends React.Component {
	state = {
		dataTable: {},
		responseData: [],
		knowCountry: "",
		destinationCountry: "",
	};

	componentDidMount() {
		axios.get("http://127.0.0.1:4000/api/getCountriesTable").then((response) => {
			this.setState({responseData : response});
		});
	}

	render() {
		const dataTable = selectCoutryFilter(
			this.state.responseData,
			this.props.knowCountry,
			this.props.destinationCountry
		);

		return (
			<div className={styler["main-datatable-block"]}>
				<TableContainer component={Paper} className={styler["main-datatable-container"]}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="left">Params</TableCell>
								{dataTable &&
									dataTable.header.map((row) => (
										<TableCell key={row}>
											{row}
										</TableCell>
									))}
							</TableRow>
						</TableHead>

						<TableBody>
							{dataTable &&
								dataTable.content.map((row) => (
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
}
