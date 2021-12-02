import { createSlice } from "@reduxjs/toolkit";
import loginApi from "../api/login.api";
var infoAdmin = JSON.parse(sessionStorage.getItem("infoAdmin"));
const loginSlice = createSlice({
	name: "branch",
	initialState: {
		data: infoAdmin ? infoAdmin : {},
		load: false,
		error: "",
	},
	reducers: {},

	extraReducers: {
		[loginApi.pending]: (state) => {
			state.load = true;
		},
		[loginApi.fulfilled]: (state, action) => {
			console.log("action.payload: ", action.payload.data.data.token);
			state.load = false;
			sessionStorage.setItem('infoAdmin', JSON.stringify(action.payload.data.data.token));
			state.data = action.payload.data;
			state.error = "";
			window.location.href = "/thong-ke";
		},
		[loginApi.rejected]: (state, action) => {
			state.load = false;
			console.log("action.payload error: ", action.payload);
			state.error = action.payload.error;
		},
	},
});

export default loginSlice.reducer;
