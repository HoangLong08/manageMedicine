import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { URL, URL_API } from "config";
import authHeaderAdmin from "services/authHeader";

const getListEmployee = createAsyncThunk(
	"employee/getListEmployee",
	async (params, thunkAPI) => {
		try {
			const result = await axios({
				method: 'POST',
				url: URL + URL_API.API_LIST_EMPLOYEE,
				data: {
					employees_name: "",
					employees_status: "",
				},
				headers: authHeaderAdmin()
			});
			return result.data;
		} catch (error) {
			thunkAPI.rejectWithValue({ error: error.message });
		}
	}
);

export default getListEmployee;
