const API_BASE = "http://localhost:3000/api";

async function loadEvents() {

    const response = await fetch(`${API_BASE}/events`);
    const events = await response.json();

    const container = document.getElementById("events");
    container.innerHTML = "";

    events.forEach(event => {

        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
            <h3>${event.title}</h3>
            <p>📍 ${event.city}</p>
            <p>📅 ${event.date}</p>
            <p>🎫 Remaining: ${event.available_tickets}</p>

            <input type="text" id="name-${event.id}" placeholder="Your name">
            <input type="number" id="qty-${event.id}" value="1" min="1">

            <button onclick="bookTicket(${event.id})">
                Book Ticket
            </button>
        `;

        container.appendChild(card);
    });
}

async function bookTicket(eventId) {

    const customerName =
        document.getElementById(`name-${eventId}`).value;

    const quantity =
        parseInt(document.getElementById(`qty-${eventId}`).value);

    if (!customerName) {
        alert("Please enter your name");
        return;
    }

    const response = await fetch(`${API_BASE}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            event_id: eventId,
            customer_name: customerName,
            quantity
        })
    });

    const result = await response.json();

    if (response.ok) {
        alert("🎉 Booking successful!");
        loadEvents();
    } else {
        alert(`❌ ${result.message}`);
    }
}

loadEvents();