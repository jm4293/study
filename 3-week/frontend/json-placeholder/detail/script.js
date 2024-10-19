document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  if (postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((post) => {
        document.getElementById("postTitle").textContent = post.title;
        document.getElementById("postBody").textContent = post.body;
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  } else {
    document.getElementById("postTitle").textContent =
      "게시글을 찾을 수 없습니다.";
    document.getElementById("postBody").textContent = "";
  }
});
