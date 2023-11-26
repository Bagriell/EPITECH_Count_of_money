const { default: axios } = require("axios");
const baseUrl = "test";

export default {
  // GET /articles
  // Get all articles
  // params: : filters
  // return Article: id, title, summary, source, date, url of article, url of image
  async getArticles(params) {
    return await axios.get(
      "/articles",
      { params: params },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  },

  // GET /articles/{id}
  // Get article by id
  // return Article: id, title, summary, source, date, url of article, url of image
  async getArticle(params, id) {
    return await axios.get(
      `/article/${id}`,
      { params: params },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  },
};
