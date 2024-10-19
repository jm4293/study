import axios from "axios";

export class AxiosConfigApi {
  static axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`,
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });

  async get(url, params, headers) {
    return await this.axiosInstance.get(url, { params, headers });
  }

  static async post(url, data, headers) {
    return await this.axiosInstance.post(url, data, { headers });
  }

  async put(url, data, headers) {
    return await this.axiosInstance.put(url, data, { headers });
  }

  async delete(url, params, headers) {
    return await this.axiosInstance.delete(url, { params, headers });
  }

  async patch(url, data, headers) {
    return await this.axiosInstance.patch(url, data, { headers });
  }
}
