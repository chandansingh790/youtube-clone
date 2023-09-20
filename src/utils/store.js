import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchSuggestedData from "./searchSuggestedSlice";

const store = configureStore({
	reducer: {
		app: appSlice,
		search: searchSlice,
		chat: chatSlice,
		searchData: searchSuggestedData
	},
});

export default store;