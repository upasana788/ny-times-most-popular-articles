import axios from "axios";

const API_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/";

const API_KEY=process.env.REACT_APP_NY_TIMES_POPULAR_ARTICLES_API_KEY;


export const fetchArticles = async (period: number) => {
  try {
    console.log(`requesting url: ${API_URL}${period}.json`);
    const response = await axios.get(`${API_URL}${period}.json`, {
      params: { "api-key": API_KEY },
    });

    return response.data.results;
  } catch (error) {
    console.log("Error Fetching Articles", error);
    return [];
  }
};
