import { AxiosConfigApi } from '../axios-config';

export class AuthApi extends AxiosConfigApi {
  static _baseUrl = `${process.env.REACT_APP_GLOBAL_PREFIX}/auth`;

  /**
   * @param {Object} data - 요청 데이터
   * @param {string} data.email - 이메일
   * @param {string} data.password - 비밀번호
   * @returns {Promise<AxiosResponse<any>>}
   */
  static async login(data) {
    try {
      const response = await AxiosConfigApi.post(`${this._baseUrl}/sign-in`, data);

      if (response) {
        const token = response.headers['authorization'];

        AxiosConfigApi.setAuthorizationHeader(token);

        return response;
      }
    } catch (error) {
      // throw error;
    }
  }

  /**
   * @param {Object} data - 요청 데이터
   * @param {string} data.email - 이메일
   * @param {string} data.password - 비밀번호
   * @param {string} data.name - 이름
   * @param data
   * @returns {Promise<AxiosResponse<any>|undefined>}
   */
  static async signUp(data) {
    try {
      return await AxiosConfigApi.post(`${this._baseUrl}/sign-up`, data);
    } catch (error) {
      // throw error;
    }
  }

  /**
   * @param {Object} data - 요청 데이터
   * @param {string} data.email - 이메일
   * @param {string} data.password - 비밀번호
   * @returns {Promise<AxiosResponse<any>|undefined>}
   */
  static async findPassword(data) {
    try {
      return await AxiosConfigApi.patch(`${this._baseUrl}/change-password`, data);
    } catch (error) {
      // throw error;
    }
  }
}
