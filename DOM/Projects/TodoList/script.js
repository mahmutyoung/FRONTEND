const btnAdd = document.querySelector("#btn-add");
//let myTasks = document.getElementsByClassName("task")
let myTasks = document.getElementsByClassName("tasks")[0]
const input = document.querySelector("#input-area");
let btnDeleteAll = document.getElementsByClassName("btn-delete-all")[0]
btnDeleteAll.disabled = true;

//put a comment




btnAdd.addEventListener("click", function() {

    if (input.value === "") {
        alert("put some text")
    } else {
        const newTask = document.createElement("li")
        newTask.classList.add("li1");
        newTask.innerHTML = `<p>${input.value} </p>` + "<button class='delete'>X</button>"

        myTasks.appendChild(newTask)

        input.value = ""; //after taking input, gives a fresh input

        newTask.children[1].addEventListener("click", function() {
            this.parentElement.remove();
        });
        btnDeleteAll.disabled = false;

    }
});

btnDeleteAll.addEventListener("click", function() {
    for (let i = 0; i < myTasks.children.length; i++) {
        myTasks.children[i].remove();
    }
});