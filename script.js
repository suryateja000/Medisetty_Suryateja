// Get elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add event listener to Add button
addBtn.addEventListener('click', addTask);

// Allow Enter key to add task
input.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.className = 'todo-item';

  // Task text
  const span = document.createElement('span');
  span.textContent = taskText;

  // Complete toggle
  span.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.innerHTML = '&times;';
  removeBtn.addEventListener('click', function() {
    todoList.removeChild(li);
  });

  // Assemble and append
  li.appendChild(span);
  li.appendChild(removeBtn);
  todoList.appendChild(li);

  // Clear input
  input.value = '';
}
