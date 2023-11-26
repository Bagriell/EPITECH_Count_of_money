const { default: axios } = require("axios");
const baseUrl = "test";

export default {
  // POST /users/register - @not_logged
  // register user
  async register(username, pwd) {
    return await axios.post(`${baseUrl}/users/register`, {
      params: { username: username, pwd: pwd },
    });
  },

  // POST /users/login - @not_logged
  // login user
  async login(username, pwd) {
    return await axios.post(`${baseUrl}/users/login`, {
      params: { username: username, pwd: pwd },
    });
  },

  // GET /users/auth/{provider} - @not_logged
  // oAuth2 authentification
  // provider = "twitter"
  async loginOauth(provider) {
    return await axios.get(`${baseUrl}/users/auth/${provider}`);
  },

  // GET /users/auth/{provider}/callback - @not_logged
  // Retrieve service infos
  // provider = "facebook"   
  async loginOauth(provider) {
    return await axios.get(`${baseUrl}/users/auth/${provider}/callback`);
  },

  // POST /users/logout - @logged
  // logout user
  async logout() {
    return await axios.post(
      `${baseUrl}/users/logout`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  },

  // GET /users/profile @logged
  // get profile informations
  // return: {nickame, default_currency, listCurrency, listKwArticles}
  async getProfile() {
    return await axios.get(
      `${baseUrl}/users/profile`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  },

  // PUT /users/profile @logged
  // edit profile
  // params: {nickame, default_currency, listCurrency, listKwArticles}
  async putProfile(params) {
    return await axios.put(
      `${baseUrl}/users/profile`,
      { params: params },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  },
};
