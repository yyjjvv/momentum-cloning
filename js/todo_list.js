const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

//Save ToDos in Array & Local Storage
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//Delete ToDo with When Click X
function deleteToDoList(event) {
    const liToDelete = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(liToDelete.id));
    saveToDos();
    liToDelete.remove();
}

//Show ToDo List
function paintToDo(showToDo) {
    const li = document.createElement("li");
    li.id = showToDo.id;
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    li.appendChild(span);
    li.appendChild(deleteBtn);
    span.innerText = showToDo.text;
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", deleteToDoList);
    toDoList.appendChild(li);
}

//Submit ToDo
function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}