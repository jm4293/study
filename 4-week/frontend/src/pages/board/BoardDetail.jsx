import React, { useEffect, useState } from 'react';
import { Button } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { BoardApi } from '../../commons';
import { useSessionStorage } from '../../hooks';
import { CommentList } from './comment/CommentList';
import { BoardCommentApi } from '../../commons/api/board-comment';

export const BoardDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isMine, setIsMine] = useState(false);
  const [commentList, setCommentList] = useState([]);

  const { getSessionStorage } = useSessionStorage();

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    if (!title) {
      return alert('제목을 입력해주세요.');
    }

    if (!content) {
      return alert('내용을 입력해주세요.');
    }

    try {
      await BoardApi.createBoard({ title, content });
      alert('게시글이 작성되었습니다.');
      navigate('/board-list');
    } catch (error) {}
  };

  const onDeleteHandle = async () => {
    if (window.confirm(`${title}을(를) 삭제하시겠습니까?`)) {
      try {
        await BoardApi.deleteBoard(id);
        alert('게시글이 삭제되었습니다.');
        navigate('/board-list');
      } catch (error) {}
    }
  };

  const onModifyHandle = async () => {
    try {
      await BoardApi.updateBoard({ id, title, content });
      const result = await BoardApi.getBoardDetail(id);

      setTitle(result.title);
      setContent(result.content);

      alert('게시글이 수정되었습니다.');
      // navigate('/board-list');
    } catch (error) {}
  };

  const onBackHandle = () => {
    navigate('/board-list');
  };

  useEffect(() => {
    if (!!id) {
      (async () => {
        const boardResponse = await BoardApi.getBoardDetail(id);
        const commentResponse = await BoardCommentApi.getBoardCommentList(id);

        if (boardResponse.email === getSessionStorage('email')) {
          setIsMine(true);
        }

        setTitle(boardResponse.title);
        setContent(boardResponse.content);

        setCommentList(commentResponse);
      })();
    }
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="flex justify-between items-center mb-4">
          {!!id ? <h1 className="mx-auto">No. {id}번째 작성 글</h1> : <h1 className="mx-auto">게시글 작성</h1>}
        </div>

        <form onSubmit={onSubmitHandle}>
          <div className="input-group">
            <label htmlFor="title">제목</label>
            <input className="border-2" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="input-group">
            <label htmlFor="content">내용</label>
            <textarea
              className="w-full border-2 resize-none p-2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end items-center gap-2">
            {isMine && (
              <div className="flex gap-2">
                <Button className="bg-red-500" onClick={onDeleteHandle}>
                  삭제
                </Button>
                <Button onClick={onModifyHandle}>수정</Button>
              </div>
            )}
            {!id && <Button type="submit">글 작성</Button>}
          </div>
        </form>

        <div className="flex justify-center">
          <Button onClick={onBackHandle}>뒤로가기</Button>
        </div>
      </div>
      <CommentList {...{ boardId: id, commentList, setCommentList, isMine }} />
    </>
  );
};
