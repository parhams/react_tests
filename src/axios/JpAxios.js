import axios from 'axios'
export const jpAxios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        Authorization: "Bearer spvbkdiermorbnzkuibdkdcaohvdjcmbv ...",
        "Contect-Type": "application/json"
    }
  })

