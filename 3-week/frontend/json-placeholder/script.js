document.addEventListener("DOMContentLoaded", () => {
  const postList = document.getElementById("postList");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="detail/index.html?id=${post.id}">${post.id}. ${post.title}</a>`;
        postList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
});
