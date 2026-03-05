// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task-item';

  // Task text span
  const span = document.createElement('span');
  span.textContent = taskText;
  span.className = 'task-text';
  li.appendChild(span);

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function() {
    li.remove();
  };
  li.appendChild(deleteBtn);

  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.className = 'complete-btn';
  completeBtn.onclick = function() {
    li.classList.toggle('completed');
  };
  li.appendChild(completeBtn);

  taskList.appendChild(li);
  taskInput.value = '';
}

// Event listeners
addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});