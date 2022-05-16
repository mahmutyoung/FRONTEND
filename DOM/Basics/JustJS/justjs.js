document.body.innerHTML =
    `<div class="tasks-container" id="task-container">
<div class="delete-all-container">
    <h3 id="header-my-tasks">My Tasks</h3>
    <button class="btn-delete-all">Delete All</button>
</div>
<ul class="tasks" id="tasks"></ul>
</div> <form class="new-item" id="new-item" action="#">
<label for="input-area" id="input-label">Add New Task: </label>
<input type="text" id="input-area" name="input" value="" placeholder="New Task"></input>
<label for="btn-add" id="submit-label"></label>
<input class="btn-add" id="btn-add" type="button" value="Add" target="#">
</form>`

let myH3 = document.querySelector("#header-my-tasks");
myH3.style.color = "#ff0000";