import { useEffect, useState } from 'react';
import { BoardApi } from '../../commons';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import dayjs from 'dayjs';

export const BoardList = () => {
  const navigate = useNavigate();

  const [boardList, setBoardList] = useState([]);

  const onCreateBoardHandle = () => {
    navigate('/board-detail');
  };

  const oonBoardClickHandle = (id) => {
    navigate(`/board-detail/${id}`);
  };

  useEffect(() => {
    (async () => {
      const response = await BoardApi.getBoardList();
      setBoardList(response);
    })();
  }, []);

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-4">
        <h1 className="mx-auto">게시판 리스트</h1>
        <Button onClick={onCreateBoardHandle}>글 작성</Button>
      </div>

      {boardList ? (
        <ul>
          {boardList.map((board, index) => (
            <li key={board.id} onClick={() => oonBoardClickHandle(board.id)}>
              <div className="flex justify-between">
                <p>
                  {board.id}. {board.title}
                </p>
                <div className="flex gap-2">
                  <p>{board.writer}</p>
                  <p>{dayjs(board.createdAt).format('YYYY-MM-DD')}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>게시글이 없습니다.</p>
      )}
    </div>
  );
};
