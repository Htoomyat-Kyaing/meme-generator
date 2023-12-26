import axios from "axios";

const URL = "https://api.imgflip.com/get_memes"

export const fetchMemes = async () => {
	const response = await axios.get(URL)
	return response.data.data.memes
}

