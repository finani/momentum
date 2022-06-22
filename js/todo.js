const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

toDoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
});
