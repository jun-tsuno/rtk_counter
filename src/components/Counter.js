import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Counter.css";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	color: theme.palette.text.secondary,
	width: 350,
	height: 150,
	lineHeight: "150px",
}));

function Counter({
	children,
	label,
	addAdults,
	removeAdults,
	addChildren,
	removeChildren,
}) {
	return (
		<div>
			<Box
				sx={{
					p: 2,
					bgcolor: "background.default",
					display: "grid",
					gridTemplateColumns: { md: "1fr 1fr" },
					gap: 2,
				}}
			>
				<Item key="2">
					<label className="label">{label}</label>
					<Fab
						size="small"
						color="primary"
						aria-label="add"
						onClick={() => {
							removeAdults && removeAdults();
							removeChildren && removeChildren();
						}}
					>
						<RemoveIcon />
					</Fab>
					<span className="count">{children}</span>
					<Fab
						size="small"
						color="primary"
						aria-label="add"
						onClick={() => {
							addAdults && addAdults();
							addChildren && addChildren();
						}}
					>
						<AddIcon />
					</Fab>
				</Item>
			</Box>
		</div>
	);
}

export default Counter;
