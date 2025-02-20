function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    let errorMessage = document.getElementById("errorMessage");

    if (taskText === "") {
        errorMessage.textContent = "Task cannot be empty!";
        return;
    }

    errorMessage.textContent = "";
    let taskList = document.getElementById("taskList");
    let listItem = document.createElement("li");

    listItem.innerHTML = `
        <div class="task-item">
            <input type="checkbox" onclick="toggleTask(this)">
            <span>${taskText}</span>
        </div>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(listItem);
    input.value = "";
}

function toggleTask(checkbox) {
    let taskText = checkbox.nextElementSibling;
    taskText.classList.toggle("completed", checkbox.checked);
}

function deleteTask(button) {
    let listItem = button.parentElement;
    listItem.remove();
}

document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});