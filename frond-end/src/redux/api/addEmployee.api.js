import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import authHeaderAdmin from "services/authHeader";
import { URL, URL_API } from "../../config";

const postAddEmployee = createAsyncThunk(
	"employee/postAddEmployee",
	async (params, thunkAPI) => {
		try {
			const result = await axios({
				method: 'POST',
				url: URL + URL_API.API_ADD_ACCOUNT,
				data: {
					user_name: params.username,
					password: params.password,
					id_employee: parseInt(params.employees_id),
				},
				headers: authHeaderAdmin(),
			});
			await console.log("result add employee: ", result)
			if (result.status === 200) {
				return result;
			} else {
				return thunkAPI.rejectWithValue({ error: "Thêm thất bại" });
			}
		} catch (error) {
			if (!error.response) {
				throw error
			}
			return thunkAPI.rejectWithValue({ error: "Thêm thất bại" });
		}
	}
);

export default postAddEmployee;
