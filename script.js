let button = document.querySelector('#addBtn')
let input = document.querySelector('#taskInput')
let ul = document.querySelector("#list");

/* const deleteButton = document.createElement('i');
deleteButton.className = 'fa-regular fa-square-plus';
itemBtns.append(deleteButton); */
let div = document.createElement('div');

button.addEventListener('click', function () {
    let li = document.createElement("li");
    li.className = 'item';
    li.textContent = input.value;
    ul.append(li);
    li.append(div);
    console.log(task)
});
div.className = 'item_btns';


let i = document.createElement('i');
i.className = 'fa-regular fa-square-check';
div.append(i)
let g = document.createElement('i');
g.className = 'fa-solid fa-trash-can'
div.append(g);
i.addEventListener('click', function () {
    item.classList.toggle('done')
})

i.addEventListener('click', function () {
    target = event.target
    if (target.dataset.action == 'complate') {
        completeBtn(target);
    }
})
g.addEventListener('click', function () {
    target = event.target
    if (target.dataset.action == 'delet') {
        removeTask(target);
    }
})

function completeBtn(target) {
    target.closest('li').classList.toggle('done');
    let currenid = target.closest('li').id;
    const index = tasks.findIndex(function (task) {
        return task.id == currenid
    })
    if (tasks[index].complete == false) {
        tasks[index].complete == true;
    } else {
        tasks[index].complete == false;
    }
}



let tasks[];

if (losalStorage.getItem('tasksls')) {
    tasks = JSON.parse(losalStorage.getItem('tasksls'));
}
tasks.forEach(task => {
    const cssClass = task.complete ? 'item done ' : 'item';
    ul.insertAdjacentHtml('beforeend',
        `li class= "${cssClass}" id=" ${task.id}" >${task.text}`)
});


let newTask = {
    id: Date.now(),
    text: taskInput.value,
    done: false
}
tasks.push(newTask);
newItem.setAttribute('id', newTask.id)


function removeTask(target) {
    target.closest('li').remove();
    taskInput.value = "";
    localStorage.setItem('tasksLS', list.innerHTML);
    let index = tasks.findIndex(function (task) {
        return task.id == target.closest("li").id
    })
    tasks.splise(index, 1)
}


if (localStorage.getItem('htmlLs')) {
    list.innerHTML = localStorage.getItem('htmlLs');
}
