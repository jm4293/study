import { AxiosConfigApi } from "../axios-config";

export class AuthApi extends AxiosConfigApi {
  static _baseUrl = `${process.env.REACT_APP_GLOBAL_PREFIX}/auth`;

  static async login(data) {
    return await AxiosConfigApi.post(`${this._baseUrl}/sign-in`, data);
  }
}
