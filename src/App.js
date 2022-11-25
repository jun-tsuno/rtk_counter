import { useState } from "react";
import Counter from "./components/Counter";
import { Button } from "@mui/material";

function App() {
	const [adults, setAdults] = useState(0);
	const [children, setChildren] = useState(0);

	const addAdults = () => {
		setAdults((currentAdults) => {
			return currentAdults + 1;
		});
	};

	const removeAdults = () => {
		setAdults((currentAdults) => {
			if (currentAdults) {
				return currentAdults - 1;
			}
			return 0;
		});
	};

	const addChildren = () => {
		setChildren((currentChildren) => {
			return currentChildren + 1;
		});
	};

	const removeChildren = () => {
		setChildren((currentChildren) => {
			if (currentChildren) {
				return currentChildren - 1;
			}
			return 0;
		});
	};

	const handleReset = () => {
		setAdults(0);
		setChildren(0);
	};

	return (
		<div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Counter
					addAdults={addAdults}
					removeAdults={removeAdults}
					label="Adults"
				>
					{adults}
				</Counter>
				<Counter
					label="Children"
					addChildren={addChildren}
					removeChildren={removeChildren}
				>
					{children}
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
