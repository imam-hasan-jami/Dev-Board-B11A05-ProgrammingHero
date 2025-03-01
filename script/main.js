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

            alert("Board Updated Successfully");

            this.disabled = true;

            this.style.backgroundColor = "#949ee3";
            this.style.cursor = "not-allowed";
        }
    })
}