import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { URL, URL_API } from "../../config";

const postLogin = createAsyncThunk(
	"login/postLogin",
	async (params, thunkAPI) => {
		try {
			const result = await axios({
				method: 'POST',
				url: URL + URL_API.API_LOGIN,
				data: {
					username: params.username,
					password: params.password,
					id_branch: parseInt(params.branch_id),
				},
				headers: {
					'Content-Type': 'application/json',
				}
			});
			if (result.status === 200) {
				return result;
			} else {
				return thunkAPI.rejectWithValue({ error: "Đăng nhập thất bại" });
			}
		} catch (error) {
			if (!error.response) {
				throw error
			}
			return thunkAPI.rejectWithValue({ error: "Đăng nhập thất bại" });
		}
	}
);

export default postLogin;
