let taskInput = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');
let tasksAdd = document.getElementById('tasks__add');

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addNewTask();
    }
});

tasksAdd.addEventListener('click', (e) => {
    e.preventDefault();
    addNewTask();
});

function addNewTask() {
    if (taskInput.value.length < 0) return
    let taskWrap = document.createElement('div');
    let task = document.createElement('div');
    let remove = document.createElement('a');

    taskWrap.classList = 'task';
    task.classList = 'task__title';
    task.innerText = taskInput.value;
    remove.classList.add('task__remove');
    remove.setAttribute("href", "#");
    remove.innerHTML = '&times;';
    
    tasksList.insertAdjacentElement('afterBegin', taskWrap);
    taskWrap.insertAdjacentElement('afterBegin', task);
    task.insertAdjacentElement('afterEnd', remove);
    taskInput.value = '';

    remove.addEventListener('click', () => {
        taskWrap.remove()
    })
}
