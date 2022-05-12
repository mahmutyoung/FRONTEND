const btnAdd = document.querySelector("#btn-add");
const myTasks = document.getElementsByClassName("tasks")[0]
const input = document.querySelector("#input-area");
const btnDeleteAll = document.getElementsByClassName("btn-delete-all")[0]
btnDeleteAll.disabled = true;
let myTasksArray = [];
let key = "storedTasks"

loadFromStorage();

btnAdd.addEventListener("click", function() {

    if (input.value === "") {
        alert("put some text")
    } else {
        createTask(input.value);
        myTasksArray.push(input.value)
        addToLocalStorage(myTasksArray);
        input.value = ""; //after taking input, gives a fresh input

    }
});

function createTask(str) {
    const newTask = document.createElement("li");
    newTask.className = "li1";
    newTask.innerHTML = `<p>${str} </p>` + "<button class='delete'>X</button>"
    myTasks.appendChild(newTask)
    newTask.children[1].addEventListener("click", function() {
        this.parentElement.remove();
        myTasksArray.pop();
        addToLocalStorage(myTasksArray);
    });
    btnDeleteAll.disabled = false;
}

btnDeleteAll.addEventListener("click", function() {
    myTasks.innerHTML = "";
    localStorage.removeItem(key);
});

function loadFromStorage() {
    if (localStorage.getItem(key) !== null) {
        myTasksArray = JSON.parse(localStorage.getItem(key));
        for (let i = 0; i < myTasksArray.length; i++) {
            createTask(myTasksArray[i]);
        }
    }
}

function addToLocalStorage(array) {
    let tasks = JSON.stringify(array)
    localStorage.setItem(key, tasks)
}