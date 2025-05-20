window.addEventListener("DOMContentLoaded", () => {
  const getTodos = JSON.parse(localStorage.getItem("todos"));
  if (getTodos) document.getElementById("todoList").innerHTML = getTodos;
});

let todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

document.getElementById("todoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = `
        <span class="task">${todoInput.value}</span>
        <div>
        <button class="edit-btn"><i class="bi bi-pencil-fill"></i></button>
        <button class="delete-btn"><i class="bi bi-trash3-fill"></i></button>
        </div>
        `;
  todoList.append(li);
  localStorage.setItem("todos", JSON.stringify(todoList.innerHTML));
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("bi-trash3-fill")) {
    const li = target.closest("li");
    li.remove();
    localStorage.setItem("todos", JSON.stringify(todoList.innerHTML));
  }

  if (target.classList.contains("bi-pencil-fill")) {
    const li = target.closest("li");
    const span = li.querySelector("span");
    let editedTodo;
    do {
      editedTodo = prompt("Edit your task:", span.textContent);
    } while (editedTodo === null && editedTodo.trim() === "");
    span.textContent = editedTodo;
    localStorage.setItem("todos", JSON.stringify(todoList.innerHTML));
  }
});
