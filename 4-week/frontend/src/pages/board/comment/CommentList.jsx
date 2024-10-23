import React, { useEffect, useState } from 'react';
import { Button } from '../../../components';
import { BoardCommentApi } from '../../../commons/api/board-comment';
import dayjs from 'dayjs';
import { useSessionStorage } from '../../../hooks';

export const CommentList = ({ boardId }) => {
  const [content, setContent] = useState([]);
  const [commentList, setCommentList] = useState([]);

  const { getSessionStorage } = useSessionStorage();

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    if (!commentList) {
      return alert('댓글을 입력해주세요.');
    }

    try {
      await BoardCommentApi.createBoardComment({ content, boardId });
      const commentResponse = await BoardCommentApi.getBoardCommentList(boardId);

      setCommentList(commentResponse);
      setContent('');
    } catch (error) {}
  };

  const onDeleteHandle = async (id) => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      try {
        await BoardCommentApi.deleteBoardComment(id);
        const commentResponse = await BoardCommentApi.getBoardCommentList(boardId);

        setCommentList(commentResponse);
      } catch (error) {}
    }
  };

  useEffect(() => {
    if (!!boardId) {
      (async () => {
        const commentResponse = await BoardCommentApi.getBoardCommentList(boardId);

        setCommentList(commentResponse);
      })();
    }
  }, [boardId]);

  return (
    <div className="container">
      <h1>댓글</h1>

      <form onSubmit={onSubmitHandle}>
        <div className="input-group">
          <label htmlFor="title">댓글 입력</label>
          <div className="flex items-center gap-2">
            <input className="border-2" value={content} onChange={(e) => setContent(e.target.value)} />
            <Button type="submit">등록</Button>
          </div>
        </div>
      </form>

      <div className="flex flex-col gap-2">
        {commentList.length > 0 ? (
          commentList?.map((comment, index) => (
            <div key={comment.id} className="flex justify-between border-2 p-2">
              <div className="flex items-center gap-2">
                <div>{index + 1}. </div>
                <div>{comment.content}</div>
              </div>
              <div className="flex items-center gap-4">
                <div>{comment.name}</div>
                <div>{dayjs(comment.createdAt).format('YYYY-MM-DD')}</div>
                {comment.email === getSessionStorage('email') && (
                  <Button className="bg-red-500" onClick={() => onDeleteHandle(comment.id)}>
                    삭제
                  </Button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>댓글이 없습니다.</div>
        )}
      </div>
    </div>
  );
};
