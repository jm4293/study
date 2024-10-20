import { AxiosConfigApi } from '../axios-config';

export class BoardApi extends AxiosConfigApi {
  static _baseUrl = `${process.env.REACT_APP_GLOBAL_PREFIX}/board`;

  static async getBoardList() {
    try {
      const response = await AxiosConfigApi.get(`${this._baseUrl}/board-list`);

      const { data } = response.data;

      return data;
    } catch (error) {
      // throw error;
    }
  }

  static async createBoard(data) {
    try {
      return await AxiosConfigApi.post(`${this._baseUrl}/board-create`, data);
    } catch (error) {
      // throw error;
    }
  }
}
