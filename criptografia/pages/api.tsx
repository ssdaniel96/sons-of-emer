import axios from "axios";

const apiUrl = 'http://localhost:8000'

const api = axios.create({
  baseURL: apiUrl
})

export default api