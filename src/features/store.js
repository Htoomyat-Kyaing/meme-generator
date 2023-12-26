import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "../features/meme/memeSlice"

const store = configureStore({
	reducer:{
		meme:memeReducer
	}
})

export default store
