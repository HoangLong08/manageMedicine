import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { URL, URL_API } from "config";
const getListBranch = createAsyncThunk(
	"branch/getListBranch",
	async (params, thunkAPI) => {
		try {
			const result = await axios({
				method: 'GET',
				url: URL + URL_API.API_LIST_BRANCH,
			});
			return result.data;
		} catch (error) {
			thunkAPI.rejectWithValue({ error: error.message });
		}
	}
);

export default getListBranch;
