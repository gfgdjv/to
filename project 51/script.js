const addBtn = document.querySelector('#addBtn');
const taskInput = document.querySelector('#taskInput');
const list = document.querySelector('#list');
let tasks = [];

tasks.forEach(task =>{
    const cssClass = task.complete ? "item done" : "item";
    list.insertAdjacentHTML("beforeed", 
    `<li class="${cssClass}" id="${task.id}">${task.text}
    <div class="btns">
    <i class="fa-regular fa-square-check" data-action="complete"></i>
    <i class="fa-solid fa-trash-can" data-action= "delete"></i>
    </div> 
    </li>`
    )
});

list.addEventListener('click', function (event) {
    target = event.target 
    if (target.dataset.action == 'complete') {
        completeBtn();
    }
    if (target.dataset.action == 'delete') {
        removeTask();
    }
    WriteLS();
}
);

addBtn.addEventListener('click', function () {
    const newItem = document.createElement('li');
    addTask(newItem);
    list.append(newItem);
    taskInput.value = '';
    writeLS();
});

function addTask(newItem) {
    newItem.classList.add('item');
    newItem.textContent = taskInput.value;
    const itemBtns = document.createElement('i');
    newItem.append(itemBtns);
    itemBtns.className = 'item__btns'; 

    const doneBtn = document.createElement('i');
    doneBtn.className = 'fa-regular fa-square-check';
    itemBtns.append(doneBtn);
    doneBtn.setAttribute('data-action', 'delete');

    let newTask = {
        id: Date.now(),
        text: taskInput.value,
        complete: false
    }

    tasks.push(newTask);
    newItem.setAttribute('id', newTask.id);
}

 function completeBtn(target) {
    target.closet('li')
 }