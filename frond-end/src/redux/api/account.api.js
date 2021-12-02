import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { URL, URL_API } from "config";
import authHeaderAdmin from "services/authHeader";
const getListAccount = createAsyncThunk(
	"branch/getListAccount",
	async (params, thunkAPI) => {
		try {
			const result = await axios({
				method: 'GET',
				url: URL + URL_API.API_LIST_ACCOUNT,
				headers: authHeaderAdmin(),
			});
			await console.log("result: ", result);
			return result.data;
		} catch (error) {
			return thunkAPI.rejectWithValue({ error: error.message });
		}
	}
);

export default getListAccount;
