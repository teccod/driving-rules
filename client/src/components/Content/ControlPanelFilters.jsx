import * as React from "react";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
	formControl: {
		marginRight: "20px",
		minWidth: 120,
	},
	divcontrol: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	label: {
		display: "flex",
		color: "black",
	},
}));

export default function MyComponent(props) {
	const classes = useStyles();

	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<Card
			sx={{ m: 1 }}
			style={{
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<FormControl
				component="fieldset"
				sx={{ p: 1 }}
				style={{ paddingLeft: 20 }}
			>
				<FormGroup aria-label="position" row>
					<FormControlLabel
						value="Show only differences"
						control={<Checkbox defaultChecked />}
						label="Show only differences"
						labelPlacement="end"
					/>
					<FormControlLabel
						value="Speed limits"
						control={<Checkbox />}
						label="Speed limits"
						labelPlacement="end"
					/>
					<FormControlLabel
						value="Safety rules"
						control={<Checkbox />}
						label="Safety rules"
						labelPlacement="end"
					/>
					<FormControlLabel
						value="Alcohol limits"
						control={<Checkbox />}
						label="Alcohol limits"
						labelPlacement="end"
					/>
				</FormGroup>
			</FormControl>

			<div className={classes.divcontrol}>
				<InputLabel
					className={classes.label}
					id="demo-simple-select-label"
				>
					Sort by:
				</InputLabel>
				<FormControl variant="standard" className={classes.formControl}>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={""}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</div>
		</Card>
	);
}
