import { createSlice } from "@reduxjs/toolkit";
import getListAccount from "../api/account.api";

const listAccountSlice = createSlice({
	name: "account",
	initialState: {
		data: [],
		load: false,
		error: "",
	},
	reducers: {},

	extraReducers: {
		[getListAccount.pending]: (state) => {
			state.load = true;
		},
		[getListAccount.fulfilled]: (state, action) => {
			state.load = false;
			state.data = action.payload.data;
			state.error = "";
		},
		[getListAccount.rejected]: (state, action) => {
			state.load = false;
			state.error = action.payload.error;
		},
	},
});

export default listAccountSlice.reducer;
