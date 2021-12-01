import { createSlice } from "@reduxjs/toolkit";
import addNewDish from "./addDish.api";

const addDishSlice = createSlice({
	name: "dish",
	initialState: {
		data: {},
		load: false,
		error: "",
	},
	reducers: {},

	extraReducers: {
		[addNewDish.pending]: (state) => {
			state.load = true;
		},
		[addNewDish.fulfilled]: (state, action) => {
			state.load = false;
			state.data = action.payload;
			state.error = "";
		},
		[addNewDish.rejected]: (state, action) => {
			state.load = false;
			state.error = action.payload.error;
		},
	},
});

export default addDishSlice.reducer;
