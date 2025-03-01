// showing the current date
document.addEventListener("DOMContentLoaded", function () {
    let now = new Date();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let dayName = days[now.getDay()];
    let monthName = months[now.getMonth()];
    let date = now.getDate();
    let year = now.getFullYear();

    let dateDisplay = document.getElementById("dateDisplay");
    dateDisplay.innerHTML = `${dayName} , <br><span class="font-bold">${monthName} ${date}, ${year}</span>`;
});

// pick a random color
document.getElementById("random-color").addEventListener("click", function () {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
})