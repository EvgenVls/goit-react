import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const featchArticlesWithTotic = async (topic, currentPage) => {
  const response = await axios.get("/search", {
    params: {
      query: topic,
      hitsPerPage: 10,
      page: currentPage,
    },
  });
  return response.data.hits;
};
