function countEventsByDate(events, eventDate) {
  // Your code here
  return events.reduce((acc, event) => {
    if (event.date === eventDate) return acc + 1;

    return acc;
  }, 0);
}

// Example usage:
const events = [
  { name: "Concert", date: "2024-12-31", lat: 40.73061, lng: -73.935242 },
  { name: "Festival", date: "2024-12-31", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", date: "2025-01-01", lat: 51.5074, lng: -0.1278 },
];

const eventDate = "2024-12-31";
const eventCount = countEventsByDate(events, eventDate);

console.log("Number of events on " + eventDate + ": " + eventCount);
