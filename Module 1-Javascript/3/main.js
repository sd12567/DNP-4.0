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

// Exercise 3
const events = [
    { name: "Summer Festival", date: "2023-06-15", seats: 100, category: "festival" },
    { name: "Baking Workshop", date: "2023-05-10", seats: 0, category: "workshop" },
    { name: "Yoga Class", date: "2023-07-20", seats: 15, category: "fitness" }
];

function displayValidEvents() {
    const today = new Date().toISOString().split('T')[0];
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';

    events.forEach(event => {
        try {
            if (new Date(event.date) >= new Date(today) && event.seats > 0) {
                const eventElement = document.createElement('div');
                eventElement.className = 'event-card';
                eventElement.innerHTML = `
                    <h3>${event.name}</h3>
                    <p>Date: ${event.date}</p>
                    <p>Seats: ${event.seats}</p>
                `;
                eventList.appendChild(eventElement);
            }
        } catch (error) {
            console.error("Error processing event:", event.name, error);
        }
    });
}