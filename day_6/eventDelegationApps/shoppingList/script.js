const itemForm = document.getElementById("itemForm");
const itemInput = document.getElementById("itemInput");
const listContainer = document.getElementById("listContainer");

window.addEventListener("DOMContentLoaded", () => {
  const getLists = JSON.parse(localStorage.getItem("shoppinglists"));
  if (getLists) listContainer.innerHTML = getLists;
});

const savedLists = () => {
  localStorage.setItem(
    "shoppinglists",
    JSON.stringify(listContainer.innerHTML)
  );
};

itemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = itemInput.value;
  const li = document.createElement("li");
  li.innerHTML = `<span>${item}</span><button><i class="bi bi-trash-fill"></i></button>`;
  listContainer.append(li);
  itemInput.value = "";
  savedLists();
});

listContainer.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("bi-trash-fill")) {
    const li = target.closest("li");
    li.remove();
    savedLists();
  }
});
