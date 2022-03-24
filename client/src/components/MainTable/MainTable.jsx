import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styler from "./Table.module.scss";
import { useSelector } from "react-redux";
import { dataTable } from "../Content/reducers/index";


export default function MainTable() {
	const data = useSelector(dataTable);

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
