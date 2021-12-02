import { createSlice } from "@reduxjs/toolkit";
import postAddEmployee from "../api/addEmployee.api";

const addEmployeeSlice = createSlice({
	name: "employee",
	initialState: {
		data: "",
		load: false,
		error: "",
	},
	reducers: {},

	extraReducers: {
		[postAddEmployee.pending]: (state) => {
			state.load = true;
		},
		[postAddEmployee.fulfilled]: (state, action) => {
			state.load = false;
			state.data = "success";
			state.error = "";
		},
		[postAddEmployee.rejected]: (state, action) => {
			state.load = false;
			state.error = action.payload.error;
		},
	},
});

export default addEmployeeSlice.reducer;
