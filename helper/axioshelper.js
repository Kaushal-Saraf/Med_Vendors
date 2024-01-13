const { default: axios } = require("axios");
export const httpAxios = axios.create({
    baseURL:process.env.Base_URL
})