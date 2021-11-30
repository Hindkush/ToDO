const inputTask = document.getElementById('inputTask');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const completedTaskList = document.getElementById('completedTaskList');


addTaskBtn.addEventListener("click",function(){

  if(inputTask.value === ""){
    alert("Please! enter the task");
  } else {
   let newTask = document.createElement('li');
   newTask.innerHTML = `<input type="checkbox">
   <label>${inputTask.value}</label>
   <button>Edit</button>
  <button>Delete</button>
   `;
   taskList.appendChild(newTask);
   inputTask.value = "";
  }
})