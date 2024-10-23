import { AxiosConfigApi } from '../axios-config';

export class BoardCommentApi extends AxiosConfigApi {
  static _baseUrl = `${process.env.REACT_APP_GLOBAL_PREFIX}/board-comment`;

  /**
   * @param boardId - 게시물 ID
   * @returns {Promise<any>}
   */
  static async getBoardCommentList(boardId) {
    try {
      const result = await AxiosConfigApi.get(`${this._baseUrl}/board-comment-list/${boardId}`);

      const { data } = result.data;

      return data;
    } catch (error) {
      // throw error;
    }
  }

  /**
   * @param {Object} data - 요청 데이터
   * @param {string} data.content - 게시물 내용
   * @param {number} data.boardId - 게시물 ID
   * @returns {Promise<AxiosResponse<any>|undefined>}
   */
  static async createBoardComment(data) {
    try {
      return await AxiosConfigApi.post(`${this._baseUrl}/board-comment-create`, data);
    } catch (error) {
      // throw error;
    }
  }

  /**
   * @param id - 댓글 ID
   * @returns {Promise<void>}
   */
  static async deleteBoardComment(id) {
    try {
      await AxiosConfigApi.delete(`${this._baseUrl}/board-comment-delete/${id}`);
    } catch (error) {
      // throw
    }
  }
}
