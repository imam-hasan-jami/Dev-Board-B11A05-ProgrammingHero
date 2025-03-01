// showing the current date
document.addEventListener("DOMContentLoaded", function () {
    displayCurrentDate();
})

// pick a random color
document.getElementById("random-color").addEventListener("click", function () {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
})