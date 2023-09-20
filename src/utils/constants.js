const GOOGLE_API_KEY = "AIzaSyByXXKNO0R4xsIcQ8KOnK77WzxFLc8ln0s";
const GOOGLE_API_KEY2 = "AIzaSyAy4FHG-RRYMXRvFkgBh2g_B_6WUsKAZ3I";
export const YOUTUBE_API_URL =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=in&key=" +
	GOOGLE_API_KEY2;

export const SEARCH_SUGGESTION_API =
	"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 10;

export const SEARCH_KEYWORD_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&type=video&key=${GOOGLE_API_KEY2}&q=`;