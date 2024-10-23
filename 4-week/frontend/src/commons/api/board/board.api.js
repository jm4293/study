import { AxiosConfigApi } from '../axios-config';

export class BoardApi extends AxiosConfigApi {
  static _baseUrl = `${process.env.REACT_APP_GLOBAL_PREFIX}/board`;

  /**
   * @param id - 게시물 ID
   * @returns {Promise<any>}
   */
  static async getBoardDetail(id) {
    try {
      const result = await AxiosConfigApi.get(`${this._baseUrl}/board-detail/${id}`);

      const { data } = result.data;

      return data;
    } catch (error) {
      // throw error;
    }
  }

  static async getBoardList() {
    try {
      const result = await AxiosConfigApi.get(`${this._baseUrl}/board-list`);

      const { data } = result.data;

      return data;
    } catch (error) {
      // throw error;
    }
  }

  /**
   * @param {Object} data - 요청 데이터
   * @param {string} data.title - 게시물 제목
   * @param {string} data.content - 게시물 내용
   * @returns {Promise<AxiosResponse<any>|undefined>}
   */
  static async createBoard(data) {
    try {
      return await AxiosConfigApi.post(`${this._baseUrl}/board-create`, data);
    } catch (error) {
      // throw error;
    }
  }

  /**
   * @param {Object} data - 요청 데이터
   * @param {string} data.title - 게시물 제목
   * @param {string} data.content - 게시물 내용
   * @param data
   * @returns {Promise<AxiosResponse<any>|undefined>}
   */
  static async updateBoard(data) {
    try {
      return await AxiosConfigApi.patch(`${this._baseUrl}/board-update`, data);
    } catch (error) {
      // throw error;
    }
  }

  /**
   * @param id - 게시물 ID
   * @returns {Promise<AxiosResponse<any>|undefined>}
   */
  static async deleteBoard(id) {
    try {
      return await AxiosConfigApi.delete(`${this._baseUrl}/board-delete/${id}`);
    } catch (error) {
      // throw error;
    }
  }
}
