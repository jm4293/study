import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BoardList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="container">
      <h1>게시판 목록 - React</h1>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <Link to={`/detail/${post.id}`}>
                {post.id}. {post.title}
              </Link>
            </li>
          ))
        ) : (
          <p>로딩중...</p>
        )}
      </ul>
    </div>
  );
};

export default BoardList;
