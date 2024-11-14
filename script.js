document.getElementById("addTaskButton").addEventListener("click", function(){
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue !== ""){
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.textContent = taskValue;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});