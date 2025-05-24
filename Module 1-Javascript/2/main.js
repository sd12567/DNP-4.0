// Exercise 1
console.log("Welcome to the Community Portal");

window.addEventListener('load', () => {
    alert("Community Portal is fully loaded!");
});
// Exercise 2
const eventName = "Summer Festival";
const eventDate = "2023-06-15";
let availableSeats = 100;

function updateSeats() {
    const seatDisplay = document.getElementById('seatDisplay');
    seatDisplay.textContent = `Event: ${eventName} on ${eventDate} - Seats: ${availableSeats}`;
}

document.getElementById('registerBtn').addEventListener('click', () => {
    if (availableSeats > 0) {
        availableSeats--;
        updateSeats();
    }
});