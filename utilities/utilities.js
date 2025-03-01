// Function to display current date
function displayCurrentDate() {
    let now = new Date();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let dayName = days[now.getDay()];
    let monthName = months[now.getMonth()];
    let date = now.getDate();
    let year = now.getFullYear();

    let dateDisplay = document.getElementById("date-display");
    dateDisplay.innerHTML = `${dayName} , <br><span class="font-bold">${monthName} ${date}, ${year}</span>`;
}

// Function to get a random color
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}