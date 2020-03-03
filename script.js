// Define UI Variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
const tasks = document.querySelector("#filter");
const deleteBtn = document.getElementsByClassName(".clear-tasks");

// load all event listeners
loadEventListeners();

// Load all Event Listeners
function loadEventListeners() {
  // add task event
  form.addEventListener("submit", addTask);
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("add a task");
  }

  // Create li Element
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  //Clear input
  taskInput.value = "";

  e.preventDefault();
}
