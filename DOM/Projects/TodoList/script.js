const btnAdd = document.querySelector("#btn-add");
//let myTasks = document.getElementsByClassName("task")
const myTasks = document.getElementsByClassName("tasks")[0]
const input = document.querySelector("#input-area");
const btnDeleteAll = document.getElementsByClassName("btn-delete-all")[0]
btnDeleteAll.disabled = true;


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
    myTasks.innerHTML = "";


});