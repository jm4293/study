import axios from 'axios';

export class AxiosConfigApi {
  static axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`,
    headers: { 'Content-Type': 'application/json', withCredentials: true },
  });

  static setAuthorizationHeader(token) {
    this.axiosInstance.defaults.headers.common['Authorization'] = `${token}`;
  }

  // async get(url, params, headers) {
  //   return await this.axiosInstance.get(url, { params, headers });
  // }
  //
  // static async post(url, data, headers) {
  //   return await this.axiosInstance.post(url, data, { headers });
  // }
  //
  // async put(url, data, headers) {
  //   return await this.axiosInstance.put(url, data, { headers });
  // }
  //
  // async delete(url, params, headers) {
  //   return await this.axiosInstance.delete(url, { params, headers });
  // }
  //
  // async patch(url, data, headers) {
  //   return await this.axiosInstance.patch(url, data, { headers });
  // }

  // 공통 요청 처리 함수
  static async request(method, url, data = null, params = null, headers = {}) {
    try {
      return await this.axiosInstance.request({ method, url, data, params, headers });
    } catch (error) {
      console.log('error', error);
      const { data, message } = error.response.data;

      switch (error.response.status) {
        case 400:
          alert(data);
          break;
        case 401:
          alert('로그인이 필요합니다.');
          window.location.href = '/';
          break;
        case 404:
          alert('찾을 수 없는 요청입니다.');
          break;
        case 500:
          alert('서버 오류입니다.');
          break;
        default:
          alert(data);
          break;
      }
    }
  }

  // HTTP 메서드 래퍼 함수들
  static async get(url, params, headers) {
    return await AxiosConfigApi.request('get', url, null, params, headers);
  }

  static async post(url, data, headers) {
    return await AxiosConfigApi.request('post', url, data, null, headers);
  }

  async put(url, data, headers) {
    return await AxiosConfigApi.request('put', url, data, null, headers);
  }

  async delete(url, params, headers) {
    return await AxiosConfigApi.request('delete', url, null, params, headers);
  }

  async patch(url, data, headers) {
    return await AxiosConfigApi.request('patch', url, data, null, headers);
  }
}
