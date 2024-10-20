document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("addBtn");
  const deleteBtn = document.getElementById("deleteBtn");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  // 할 일 추가 기능
  addBtn.addEventListener("click", function () {
    const task = todoInput.value.trim();

    if (task) {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const text = document.createElement("p");
      text.textContent = task;
      text.style.margin = "0";
      text.style.padding = "0 10px";

      li.appendChild(checkbox);
      li.appendChild(text);
      todoList.appendChild(li);
      todoInput.value = "";
      updateDeleteButtonVisibility();
    }
  });

  // 선택한 할 일 삭제 기능
  deleteBtn.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(
      "#todoList li input[type='checkbox']",
    );

    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        checkbox.parentElement.remove();
      }
    });
    updateDeleteButtonVisibility();
  });

  // 삭제 버튼 표시 여부 업데이트 함수
  function updateDeleteButtonVisibility() {
    if (todoList.children.length > 0) {
      deleteBtn.classList.add("active");
    } else {
      deleteBtn.classList.remove("active");
    }
  }

  updateDeleteButtonVisibility();
});
