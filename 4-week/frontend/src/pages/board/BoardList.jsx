import { useEffect, useState } from 'react';
import { BoardApi } from '../../commons';
import { Link } from 'react-router-dom';

export default function BoardList() {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await BoardApi.getBoardList();
      setBoardList(response);
    })();
  }, []);

  return (
    <div className="container">
      <h1>게시판 리스트</h1>

      {boardList ? (
        <ul>
          {boardList.map((board, index) => (
            <li key={board.id}>
              <Link to={`/board-detail/${board.id}`}>
                {index + 1}. {board.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>게시글이 없습니다.</p>
      )}
    </div>
  );
}
