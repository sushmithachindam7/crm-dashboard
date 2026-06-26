// Load saved data when page opens
window.onload = () => {
  loadClients();
  loadTasks();
};

// Add new client
function addClient() {
  const clientInput = document.getElementById("newClient");
  const clientList = document.getElementById("clientList");

  if (clientInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = clientInput.value + " - Status: New";
    clientList.appendChild(li);

    saveClients();
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
    li.onclick = () => {
      li.classList.toggle("done"); // mark task as done
      saveTasks();
    };
    taskList.appendChild(li);

    saveTasks();
    taskInput.value = "";
  }
}

// Save clients to localStorage
function saveClients() {
  const clients = [];
  document.querySelectorAll("#clientList li").forEach(li => {
    clients.push(li.textContent);
  });
  localStorage.setItem("clients", JSON.stringify(clients));
}

// Load clients from localStorage
function loadClients() {
  const clients = JSON.parse(localStorage.getItem("clients")) || [];
  const clientList = document.getElementById("clientList");
  clientList.innerHTML = "";
  clients.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    clientList.appendChild(li);
  });
}

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push({ text: li.textContent, done: li.classList.contains("done") });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.text;
    if (t.done) li.classList.add("done");
    li.onclick = () => {
      li.classList.toggle("done");
      saveTasks();
    };
    taskList.appendChild(li);
  });
}
