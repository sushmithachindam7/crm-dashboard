// Show alert when page loads
window.onload = () => {
  alert("CRM Dashboard Loaded!");
};

// Add new client
function addClient() {
  const clientInput = document.getElementById("newClient");
  const clientList = document.getElementById("clientList");

  if (clientInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = clientInput.value + " - Status: New";
    clientList.appendChild(li);
    clientInput.value = "";
  }
}

// Add new task
function addTask() {
  const taskInput = document.getElementById("newTask");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
