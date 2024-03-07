function addTask() {
  var taskInput = document.getElementById("newTask");
  var taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    var listItem = document.createElement("li");
    listItem.innerHTML =
      taskInput.value +
      '<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}

function deleteTask(button) {
  var listItem = button.parentNode;
  listItem.parentNode.removeChild(listItem);
}
