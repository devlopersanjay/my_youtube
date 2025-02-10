const GOOGLE_API_KEY = "AIzaSyCwG8uQhX-HKTbnd1N-V27C-87ibFTL3yQ";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCHQUERY_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
