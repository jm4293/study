import { AxiosConfigApi } from '../axios-config';

export class AuthApi extends AxiosConfigApi {
  static _baseUrl = `${process.env.REACT_APP_GLOBAL_PREFIX}/auth`;

  static async login(data) {
    try {
      const response = await AxiosConfigApi.post(`${this._baseUrl}/sign-in`, data);

      const token = response.headers['authorization'];

      AxiosConfigApi.setAuthorizationHeader(token);

      return response;
    } catch (error) {
      // throw error;
    }
  }

  static async signUp(data) {
    try {
      return await AxiosConfigApi.post(`${this._baseUrl}/sign-up`, data);
    } catch (error) {
      // throw error;
    }
  }
}
