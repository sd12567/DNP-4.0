// Exercise 1 (jQuery)
console.log("Welcome to the Community Portal");

$(window).on('load', function() {
    alert("Community Portal is fully loaded!");
});

// Exercise 2 (jQuery)
const eventName = "Summer Festival";
const eventDate = "2023-06-15";
let availableSeats = 100;

function updateSeats() {
    $('#seatDisplay').text(`Event: ${eventName} on ${eventDate} - Seats: ${availableSeats}`);
}

$('#registerBtn').click(function() {
    if (availableSeats > 0) {
        availableSeats--;
        updateSeats();
    }
});

// Exercise 3 (jQuery)
const events = [
    { name: "Summer Festival", date: "2023-06-15", seats: 100, category: "festival" },
    { name: "Baking Workshop", date: "2023-05-10", seats: 0, category: "workshop" },
    { name: "Yoga Class", date: "2023-07-20", seats: 15, category: "fitness" }
];

function displayValidEvents() {
    const today = new Date().toISOString().split('T')[0];
    const $eventList = $('#eventList').empty();

    $.each(events, function(index, event) {
        try {
            if (new Date(event.date) >= new Date(today) && event.seats > 0) {
                $('<div>')
                    .addClass('event-card')
                    .html(`
                        <h3>${event.name}</h3>
                        <p>Date: ${event.date}</p>
                        <p>Seats: ${event.seats}</p>
                    `)
                    .appendTo($eventList);
            }
        } catch (error) {
            console.error("Error processing event:", event.name, error);
        }
    });
}

// Exercise 4 (jQuery)
function createEventManager() {
    let totalRegistrations = 0;
    
    return {
        addEvent: function(name, date, seats) {
            events.push({ name, date, seats });
        },
        registerUser: function(eventName) {
            const event = $.grep(events, function(e) { return e.name === eventName; })[0];
            if (event && event.seats > 0) {
                event.seats--;
                totalRegistrations++;
                return true;
            }
            return false;
        },
        getTotalRegistrations: function() { return totalRegistrations; },
        filterEvents: function(callback) {
            return $.grep(events, callback);
        }
    };
}

const eventManager = createEventManager();

// Exercise 5 (jQuery) - Class remains the same
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

// Exercise 6 (jQuery)
function manageEvents() {
    // Add new event
    events.push({ name: "Music Concert", date: "2023-09-10", seats: 200, category: "music" });
    
    // Filter music events
    const musicEvents = $.grep(events, function(event) {
        return event.category === "music";
    });
    
    // Format display
    const eventCards = $.map(events, function(event) {
        return {
            title: `${event.name} on ${event.date}`,
            seats: `${event.seats} available`
        };
    });
}

// Exercise 7 (jQuery)
function renderEvents() {
    const $container = $('#eventsContainer').empty();
    
    $.each(events, function(index, event) {
        $('<div>')
            .addClass('event-card')
            .data('category', event.category)
            .html(`
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Seats: ${event.seats}</p>
                <button class="register-btn" data-event="${event.name}">Register</button>
            `)
            .appendTo($container);
    });
}

// Exercise 8 (jQuery)
$(document).ready(function() {
    // Register button click
    $(document).on('click', '.register-btn', function() {
        const eventName = $(this).data('event');
        handleRegistration(eventName);
    });
    
    // Category filter
    $('#categoryFilter').change(function() {
        const category = $(this).val();
        filterEventsByCategory(category);
    });
    
    // Quick search
    $('#searchInput').on('keydown', function(e) {
        if (e.key === 'Enter') {
            searchEvents($(this).val());
        }
    });
});

// Exercise 9 (jQuery)
async function fetchEvents() {
    try {
        $('#loadingSpinner').show();
        const response = await fetch('https://api.example.com/events');
        const data = await response.json();
        events.push(...data);
        renderEvents();
    } catch (error) {
        console.error("Failed to fetch events:", error);
    } finally {
        $('#loadingSpinner').hide();
    }
}

// Exercise 10 (jQuery) - Modern JS remains the same
function processEvent({ name, date, seats = 0, category = 'general' }) {
    const formattedDate = new Date(date).toLocaleDateString();
    return {
        name: name.toUpperCase(),
        formattedDate,
        remainingSeats: Math.max(0, seats)
    };
}

// Exercise 11 (jQuery)
$('#registrationForm').submit(function(e) {
    e.preventDefault();
    
    const form = e.target;
    const name = $(form).find('[name="name"]').val();
    const email = $(form).find('[name="email"]').val();
    const eventType = $(form).find('[name="eventType"]').val();
    
    if (validateForm(name, email, eventType)) {
        registerUser(name, email, eventType);
    }
});

function validateForm(name, email, eventType) {
    let isValid = true;
    
    if (!name) {
        $('#nameError').text('Name is required');
        isValid = false;
    }
    
    // More validation...
    
    return isValid;
}

// Exercise 12 (jQuery)
async function submitRegistration(userData) {
    try {
        const response = await $.ajax({
            url: 'https://api.example.com/register',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(userData)
        });
        
        showMessage(response.success ? 'Registration successful!' : 'Registration failed');
    } catch (error) {
        showMessage('Network error. Please try again.');
    }
}

// Exercise 13 (jQuery)
function debugRegistration() {
    console.log("Starting registration process...");
    
    const form = $('#registrationForm');
    console.log("Form elements:", form.find(':input'));
    
    debugger; // Breakpoint for inspection
    
    const formData = form.serializeArray();
    console.log("Form data:", formData);
}

// Additional jQuery-specific implementations
function handleRegistration(eventName) {
    $('#confirmation').fadeIn().text(`Registering for ${eventName}...`);
    setTimeout(() => {
        $('#confirmation').fadeOut();
    }, 1500);
}

function filterEventsByCategory(category) {
    $('.event-card').hide();
    if (category === 'all') {
        $('.event-card').fadeIn();
    } else {
        $(`.event-card[data-category="${category}"]`).fadeIn();
    }
}

function searchEvents(query) {
    $('.event-card').each(function() {
        const $card = $(this);
        const matches = $card.text().toLowerCase().includes(query.toLowerCase());
        $card.toggle(matches);
    });
}

function showMessage(message) {
    const $msg = $('<div>').addClass('alert').text(message);
    $('#messages').append($msg);
    setTimeout(() => $msg.fadeOut(), 3000);
}