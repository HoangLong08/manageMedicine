import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { URL, URL_API } from "../../config";
const loginApi = createAsyncThunk(
	"login/postLogin",
	async (params, thunkAPI) => {
		try {
			console.log("params: ", params);
			const result = await axios({
				method: 'POST',
				url: URL + URL_API.API_LOGIN,
				data: {
					username: params.username,
					password: params.password,
				}
			});
			console.log("result: ", result);
			return result.data;
		} catch (error) {
			thunkAPI.rejectWithValue({ error: error.message });
		}
	}
);

export default loginApi;
