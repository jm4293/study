import axios from 'axios';

export class AxiosConfigApi {
  static axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`,
    headers: { 'Content-Type': 'application/json', withCredentials: true },
  });

  static async request(method, url, data = null, params = null, headers = {}) {
    try {
      return await this.axiosInstance.request({ method, url, data, params, headers });
    } catch (error) {
      const { message } = error.response.data;

      switch (error.response.status) {
        case 400:
          alert(message);
          break;
        case 401:
          const refreshToken = localStorage.getItem('refreshToken');

          if (!refreshToken) {
            alert('로그인이 필요합니다.');
            window.location.href = '/';
          }

          const response = await this.post(
            `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/${process.env.REACT_APP_GLOBAL_PREFIX}/auth/refresh-token`,
            { refreshToken },
          );

          if (response) {
            const token = response.headers['authorization'];
            this.setAuthorizationHeader(token);

            const { url, method, data } = error.config;

            return await this.axiosInstance.request({ method, url, data, params, headers });
          } else {
            alert('로그인이 필요합니다.');
            window.location.href = '/';
          }
          break;
        case 404:
          alert('찾을 수 없는 요청입니다.');
          break;
        case 500:
          alert('서버 오류입니다.');
          break;
        default:
          alert(message);
          break;
      }

      throw error;
    }
  }

  static async get(url, params, headers) {
    return await AxiosConfigApi.request('get', url, null, params, headers);
  }

  static async post(url, data, headers) {
    if (!!headers) {
      return await AxiosConfigApi.request('post', url, data, null, headers);
    } else {
      return await AxiosConfigApi.request('post', url, data);
    }
  }

  static async put(url, data, headers) {
    return await AxiosConfigApi.request('put', url, data, null, headers);
  }

  static async delete(url, params, headers) {
    return await AxiosConfigApi.request('delete', url, {}, params, headers);
  }

  static async patch(url, data, headers) {
    return await AxiosConfigApi.request('patch', url, data, null, headers);
  }

  static setAuthorizationHeader(token) {
    this.axiosInstance.defaults.headers.common['Authorization'] = `${token}`;
  }
}
