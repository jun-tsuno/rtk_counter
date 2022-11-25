import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const adultsSlice = createSlice({
	name: "adults",
	initialState: 0,
	reducers: {
		addAdults(state, action) {
			return state + 1;
		},
		removeAdults(state, action) {
			if (state) {
				return state - 1;
			}
			return 0;
		},
	},
	extraReducers(builder) {
		builder.addCase(reset, (state, action) => {
			return 0;
		});
	},
});

export const { addAdults, removeAdults } = adultsSlice.actions;
export const adultsReducer = adultsSlice.reducer;
