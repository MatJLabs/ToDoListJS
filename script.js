document.getElementById("addTaskButton").addEventListener("click", function(){
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.ariaValueMax.trim();

    if (taskValue !== ""){
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.textContent = taskValue;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        taskList.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});