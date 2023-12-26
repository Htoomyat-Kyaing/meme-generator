import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchMemes } from "../../api/memeApi"
import { createSlice } from "@reduxjs/toolkit"

export const getMemes = createAsyncThunk(
	'memes/fetchAll',
	async () => {
		const data = await fetchMemes();
		console.log("Fetch completed!")
		return data;
	}
)

const initialState =[] 

const memeSlice = createSlice({
	name: 'memes',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addCase(getMemes.fulfilled, (state, action) => {
			state.push(action.payload)
			console.log("Memes loaded!")
		}),
			builder.addCase(getMemes.pending, () => {
				console.log("Sending memes....")
			})
		builder.addCase(getMemes.rejected, () => {
			console.log("Ohohhh....something went wrong!")
		})

	},
})

export default memeSlice.reducer;
