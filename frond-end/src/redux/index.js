import { configureStore } from "@reduxjs/toolkit";
import listBranchSlice from "./slices/listBranch.slice";
import loginSlice from "./slices/login.slice";
import listAccountSlice from "./slices/account.slice";
import listEmployeeSlice from "./slices/listEmployee.slice";
import addEmployeeSlice from "./slices/addEmployee.slice";

const myStore = configureStore({
	reducer: {
		listBranchSlice: listBranchSlice,
		loginSlice: loginSlice,
		listAccountSlice: listAccountSlice,
		listEmployeeSlice: listEmployeeSlice,
		addEmployeeSlice: addEmployeeSlice,
	},
	devTools: false,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	}),
});

export default myStore;
