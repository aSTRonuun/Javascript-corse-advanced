const inputTask = document.querySelector(".input-new-task");
const btnTask = document.querySelector(".btn-new-task");
const taskList = document.querySelector(".task-list");

function createLi() {
    const li = document.createElement("li");
    return li;
}

inputTask.addEventListener("keypress", function(e) {
    if(e.keyCode === 13) {
        if(!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function createBtnDelete(li) {
    li.innerText += " ";
    const btnDelete = document.createElement("button");
    btnDelete.innerText = "Apagar";
    btnDelete.setAttribute("class", "delete");
    btnDelete.setAttribute("title", "Apagar está tarefa");
    li.appendChild(btnDelete);
}

function clearInput() {
    inputTask.value = "";
    inputTask.focus();
}

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    taskList.appendChild(li);
    clearInput();
    createBtnDelete(li);
    saveTasks();
}


btnTask.addEventListener("click", function(e) {
    if(!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener("click", function(e) {
    const element = e.target;

    if(element.classList.contains("delete")) {
        const parent = element.parentElement;
        taskList.removeChild(parent);
        saveTasks();
    }
});

function saveTasks() {
    const liTasks = taskList.querySelectorAll("li");
    const toDoList = [];

    for(let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace("Apagar", "").trim();
        console.log(taskText);
        toDoList.push(taskText);
    }

    const toDoListJSON = JSON.stringify(toDoList);
    localStorage.setItem("toDoList", toDoListJSON);
};

function readToDoList() {
    const tasks = localStorage.getItem("toDoList");
    const toDoList = JSON.parse(tasks);
    console.log(toDoList);

    for(task of toDoList) {
        createTask(task);
    }
    
};

readToDoList();