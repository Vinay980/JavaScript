let taskFormEl=document.getElementById('task-form');
let taskList=[1,2,3,4]

taskFormEl.addEventListener('submit',(e)=>
{
    e.preventDefault();
    createTask();
});

//Create Task Functionality

function createTask()
{
    let taskInputEl=document.getElementById('task-input');
    let task=taskInputEl.value.trim();

    if(task)
    {
        let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

        let taskObj={text:task,isCompleted:false};
        taskList.unshift(taskObj);
        localStorage.setItem('tasks',JSON.stringify(taskList));
        displayTasks();
        taskInputEl.value='';
    }
}


//Display Tasks
function displayTasks()
{
    let taskListEl=document.getElementById('task-list-el');
    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    
    if(taskList!=0)
    {
        
        let eachTask=``;
        taskList.forEach((task)=>
        {
            
            eachTask+=`<li class="list-group-item list-group-item-dark mb-2">
                        <input type="checkbox">
                        <span id="lineThrough">${task.text}</span>
                        <button class="float-end" onclick="updateTask();">
                            <i class="bi bi-pen"></i>
                        </button>
                        <button class="float-end me-2" onclick="deleteTask(0);">
                            <i class="bi bi-trash"></i>
                        </button>
                    </li>`;
        });
        taskListEl.innerHTML=eachTask;
    }
}
displayTasks();

// function lineThrough(index)
// {
//     // let lineThrough=document.getElementById("lineThrough")
//     index.style.textDecoration="line";
//     localStorage.setItem('task',JSON.stringify(taskList));
//     displayTasks();
// }
// document.addEventListener('click',lineThrough);

function deleteTask(index)
{
    let taskList=localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[];
    taskList.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks();
}

function updateTask(index)
{
    let taskList=localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[];
    let taskInputEl=document.getElementById('task');
    taskInputEl.value=taskList[index].text;
    taskList.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks();
}