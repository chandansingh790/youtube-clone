import { createSlice } from "@reduxjs/toolkit";

const searchSuggestedSlice = createSlice({
	name: "searchData",
	initialState: {

	},
	reducers: {
		addSearchData: (state, action) => {
			state = Object.assign(state, action.payload);
		},
	},
});
export const { addSearchData } = searchSuggestedSlice.actions;
export default searchSuggestedSlice.reducer;