import HttpRequest from './axios'
const url = process.env.VUE_APP_API_URL
const axios = new HttpRequest(url)
export default axios