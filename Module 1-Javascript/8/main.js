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

// Exercise 4
function createEventManager() {
    let totalRegistrations = 0;
    
    return {
        addEvent: (name, date, seats) => {
            events.push({ name, date, seats });
        },
        registerUser: (eventName) => {
            const event = events.find(e => e.name === eventName);
            if (event && event.seats > 0) {
                event.seats--;
                totalRegistrations++;
                return true;
            }
            return false;
        },
        getTotalRegistrations: () => totalRegistrations,
        filterEvents: (callback) => events.filter(callback)
    };
}

const eventManager = createEventManager();


// Exercise 5
class Event {
    constructor(name, date, seats, category) {
        this.name = name;
        this.date = date;
        this.seats = seats;
        this.category = category;
    }
    
    checkAvailability() {
        return this.seats > 0 && new Date(this.date) >= new Date();
    }
}

// Usage
const newEvent = new Event("Art Exhibition", "2023-08-15", 50, "art");
console.log(Object.entries(newEvent));

// Exercise 6
function manageEvents() {
    // Add new event
    events.push({ name: "Music Concert", date: "2023-09-10", seats: 200, category: "music" });
    
    // Filter music events
    const musicEvents = events.filter(event => event.category === "music");
    
    // Format display
    const eventCards = events.map(event => ({
        title: `${event.name} on ${event.date}`,
        seats: `${event.seats} available`
    }));
}
// Exercise 7
function renderEvents() {
    const container = document.getElementById('eventsContainer');
    container.innerHTML = '';
    
    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Seats: ${event.seats}</p>
            <button class="register-btn" data-event="${event.name}">Register</button>
        `;
        container.appendChild(card);
    });
}

// Exercise 8
document.addEventListener('DOMContentLoaded', () => {
    // Register button click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('register-btn')) {
            const eventName = e.target.dataset.event;
            handleRegistration(eventName);
        }
    });
    
    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', (e) => {
        const category = e.target.value;
        filterEventsByCategory(category);
    });
    
    // Quick search
    document.getElementById('searchInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            searchEvents(e.target.value);
        }
    });
});