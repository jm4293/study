import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const BoardDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/" className="back-button">
        목록으로 돌아가기
      </Link>
    </div>
  );
};

export default BoardDetail;
