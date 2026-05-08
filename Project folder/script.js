// Your Todo List App implementation will go here!

// grab the form - start from chrome dev tools to do this
const todoFormEl = document.querySelector("#todo-form");
// grab the todo list
const todoList = document.querySelector("#todo-list");
// grab the error message
const errorMessage = document.querySelector("#error-message");
// grab the button
const addButton = document.querySelector(".add-btn");
//Grab the input field
const todoInput = document.querySelector("#todo-input");
//add to do list array
let todos = [];

// add event listener to the form
todoFormEl.addEventListener("submit", function (event) {
  const li = document.createElement("li");
  const todoText = document.createElement("span");
  const liCheckbox = document.createElement("input");
  const liDeleteButton = document.createElement("button");
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const todoItemObject = {
    id: Date.now().toString(), // Use Date.now().toString()
    text: todoInput.value, // The todo description
    completed: false, // Boolean completion status
    createdAt: formatter.format(Date.now()), // When todo was created
  };
  li.classList.add("todo-item");
  todoText.classList.add("todo-text");
  todoText.textContent = todoInput.value;
  liCheckbox.classList.add("todo-checkbox");
  liCheckbox.type = "checkbox";
  liDeleteButton.classList.add("delete-btn");
  liDeleteButton.textContent = "Delete";
  todoList.appendChild(li);
  li.appendChild(liCheckbox);
  li.appendChild(todoText);
  li.appendChild(liDeleteButton);

  todoInput.value = "";
  liCheckbox.addEventListener("change", function () {
    if (liCheckbox.checked == true) {
      li.classList.add("completed");
      todoItemObject.completed = true;
    } else {
      li.classList.remove("completed");
      todoItemObject.completed = false;
    }
  });
  liDeleteButton.addEventListener("click", function () {
    todoList.removeChild(li);
    todos = todos.filter((todo) => todo.id !== todoItemObject.id);
  });
  todos.push(todoItemObject);

  console.log(event.target);
  event.preventDefault();
});
console.log(JSON.stringify(todos));
localStorage.setItem(todoList, JSON.stringify(todos));
