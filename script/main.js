// showing the current date
document.addEventListener("DOMContentLoaded", function () {
    displayCurrentDate();
})

// pick a random color
document.getElementById("random-color").addEventListener("click", function () {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
})

// task completed button
completedBtn = document.getElementsByClassName("btn-completed");
for (let i = 0; i < completedBtn.length; i++) {
    completedBtn[i].addEventListener("click", function () {
        let assignedTask = document.getElementById("assigned-task");
        let completedTask = document.getElementById("completed-task");

        let convertedAssignedTask = parseInt(assignedTask.innerText);
        let convertedCompletedTask = parseInt(completedTask.innerText);

        if (convertedAssignedTask > 0) {
            convertedAssignedTask--;
            convertedCompletedTask++;

            assignedTask.innerText = convertedAssignedTask;
            completedTask.innerText = convertedCompletedTask;

            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();

            let timeString = `${hours}:${minutes}:${seconds}`;

            let taskContainer = this.closest(".task-container");
            let taskTitle = taskContainer.getElementsByClassName("task-title")[0].innerText;

            let activityLog = document.getElementById("activity-log");
            let newActivity = document.createElement("div");
            newActivity.innerHTML = `<div style="font-family: 'Poppins', sans-serif; background-color: #F4F7FF; margin: 10px; padding: 10px; border-radius:8px">You have completed the task: <span style="font-weight: bold;">${taskTitle}</span> at ${timeString}</div>`;
            activityLog.appendChild(newActivity);

            alert("Board Updated Successfully");

            this.disabled = true;

            this.style.backgroundColor = "#949ee3";
            this.style.cursor = "not-allowed";
        }
    })
}

// clear history button
document.getElementById("btn-clear").addEventListener("click", function() {
    let activityLog = document.getElementById("activity-log");
    activityLog.innerHTML = "";
})