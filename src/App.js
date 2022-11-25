import { useDispatch, useSelector } from "react-redux";
import {
	addAdults,
	addChildren,
	removeAdults,
	removeChildren,
	reset,
} from "./store";
import Counter from "./components/Counter";
import { Button } from "@mui/material";

function App() {
	const dispatch = useDispatch();

	const adultsNum = useSelector((state) => {
		return state.adults;
	});
	const childrenNum = useSelector((state) => {
		return state.children;
	});

	const handleAdultsAdd = () => {
		dispatch(addAdults());
	};

	const handleAdultsRemove = () => {
		dispatch(removeAdults());
	};

	const handleChildrenAdd = () => {
		dispatch(addChildren());
	};

	const handleChildrenRemove = () => {
		dispatch(removeChildren());
	};

	const handleReset = () => {
		dispatch(reset());
	};

	return (
		<div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Counter
					label="Adults"
					addAdults={handleAdultsAdd}
					removeAdults={handleAdultsRemove}
				>
					{adultsNum}
				</Counter>
				<Counter
					label="Children"
					addChildren={handleChildrenAdd}
					removeChildren={handleChildrenRemove}
				>
					{childrenNum}
				</Counter>
			</div>
			<div style={{ textAlign: "center", marginTop: "10px" }}>
				<Button
					variant="outlined"
					color="error"
					size="large"
					onClick={handleReset}
				>
					RESET
				</Button>
			</div>
		</div>
	);
}

export default App;
