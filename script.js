// Load saved data when page opens
window.onload = () => {
  loadClients();
  loadTasks();
};

// Add new client
function addClient() {
  const clientInput = document.getElementById("newClient");
  const clientList = document.getElementById("clientList");

  if (clientInput.value.trim() === "") {
    alert("Please enter a client name.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${clientInput.value} - Status: New</span>
    <button onclick="editClient(this)">Edit</button>
    <button onclick="deleteClient(this)">Delete</button>
  `;

  clientList.appendChild(li);
  saveClients();
  clientInput.value = "";
}

// Edit client
function editClient(button) {
  const span = button.parentElement.querySelector("span");
  const updatedName = prompt("Edit Client", span.textContent);

  if (updatedName !== null && updatedName.trim() !== "") {
    span.textContent = updatedName;
    saveClients();
  }
}

// Delete client
function deleteClient(button) {
  button.parentElement.remove();
  saveClients();
}

// Add new task
function addTask() {
  const taskInput = document.getElementById("newTask");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  li.onclick = () => {
    li.classList.toggle("done");
    saveTasks();
  };

  taskList.appendChild(li);

  saveTasks();
  taskInput.value = "";
}

// Save clients
function saveClients() {
  const clients = [];

  document.querySelectorAll("#clientList li span").forEach(span => {
    clients.push(span.textContent);
  });

  localStorage.setItem("clients", JSON.stringify(clients));
}

// Load clients
function loadClients() {
  const clients = JSON.parse(localStorage.getItem("clients")) || [];
  const clientList = document.getElementById("clientList");

  clientList.innerHTML = "";

  clients.forEach(client => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${client}</span>
      <button onclick="editClient(this)">Edit</button>
      <button onclick="deleteClient(this)">Delete</button>
    `;

    clientList.appendChild(li);
  });
}

// Save tasks
function saveTasks() {
  const tasks = [];

  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push({
      text: li.textContent,
      done: li.classList.contains("done")
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.textContent = task.text;

    if (task.done) {
      li.classList.add("done");
    }

    li.onclick = () => {
      li.classList.toggle("done");
      saveTasks();
    };

    taskList.appendChild(li);
  });
}
