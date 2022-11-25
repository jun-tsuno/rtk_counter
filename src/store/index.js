import { configureStore } from "@reduxjs/toolkit";
import { adultsReducer, addAdults, removeAdults } from "./slices/adultsSlices";
import {
	childrenReducer,
	addChildren,
	removeChildren,
} from "./slices/childrenSlices";
import { reset } from "./actions";

const store = configureStore({
	reducer: {
		adults: adultsReducer,
		children: childrenReducer,
	},
});

export { store, addAdults, removeAdults, addChildren, removeChildren, reset };
