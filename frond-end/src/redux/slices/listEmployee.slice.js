import { createSlice } from "@reduxjs/toolkit";
import getListEmployee from "../api/listEmployee.api";

const listEmployeeSlice = createSlice({
	name: "employee",
	initialState: {
		data: [],
		load: false,
		error: "",
	},
	reducers: {},

	extraReducers: {
		[getListEmployee.pending]: (state) => {
			state.load = true;
		},
		[getListEmployee.fulfilled]: (state, action) => {
			state.load = false;
			state.data = action.payload.data;
			state.error = "";
		},
		[getListEmployee.rejected]: (state, action) => {
			state.load = false;
			state.error = action.payload.error;
		},
	},
});

export default listEmployeeSlice.reducer;
