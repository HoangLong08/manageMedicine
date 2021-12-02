import { createSlice } from "@reduxjs/toolkit";
import getListBranch from "../api/listBranch.api";

const listBranchSlice = createSlice({
	name: "branch",
	initialState: {
		data: [],
		load: false,
		error: "",
	},
	reducers: {},

	extraReducers: {
		[getListBranch.pending]: (state) => {
			state.load = true;
		},
		[getListBranch.fulfilled]: (state, action) => {
			state.load = false;
			state.data = action.payload.data;
			state.error = "";
		},
		[getListBranch.rejected]: (state, action) => {
			state.load = false;
			state.error = action.payload.error;
		},
	},
});

export default listBranchSlice.reducer;
