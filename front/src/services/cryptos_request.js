const { default: axios } = require("axios");
const baseUrl = "test";

export default {
  // GET /cryptos/{[cypto_ids]}
  // Get list of crypto and their data
  // return name, current price, opening price, lowest price, hight price, url_image
  async getCryptos(cmids) {
    return await axios.get(
      `${baseUrl}/cryptos/${cmids}`
    );
  },

  // GET /cryptos/{cmid} @logged
  // Get a crypto info
  // return name, current price, opening price, lowest price, hight price, url_image
  async getCrypto(cmid) {
    return await axios.get(
      `${baseUrl}/cryptos/${cmid}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  },

  // GET /cryptos/{cmid}/history/{period} @logged
  // Get crypto info in date range
  async getCryptoHistory(cmid, period) {
    return await axios.get(
      `${baseUrl}/cryptos/${cmid}/history/${period}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  },


  // POST /cryptos @logged
  // post new currency
  async addCrypto(form) {
    return await axios.post(
      `${baseUrl}/cryptos`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  },

  // DELETE /cryptos/{cmid}
  // delete crypto from app
  async delCrypto(cmid) {
    return await axios.delete(
      `${baseUrl}/cryptos/${cmid}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  },

};
