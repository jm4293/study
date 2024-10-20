document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("boardSeq");

  if (postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((post) => {
        if (post?.title) {
          document.getElementById("postTitle").textContent = post.title;
          document.getElementById("postBody").textContent = post.body;
        } else {
          document.getElementById("postTitle").textContent =
            "게시글을 찾을 수 없습니다.";
          document.getElementById("postBody").textContent = "";
        }
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }
});
