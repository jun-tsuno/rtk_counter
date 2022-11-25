import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const childrenSlice = createSlice({
	name: "children",
	initialState: 0,
	reducers: {
		addChildren(state, action) {
			return state + 1;
		},
		removeChildren(state, action) {
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

export const { addChildren, removeChildren } = childrenSlice.actions;
export const childrenReducer = childrenSlice.reducer;
