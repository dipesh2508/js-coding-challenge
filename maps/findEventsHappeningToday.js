// Sample input: Array of event objects
const events = [
  { name: "Music Festival", date: "2025-01-16", lat: 40.7128, lng: -74.006 },
  { name: "Art Exhibition", date: "2024-12-23", lat: 34.0522, lng: -118.2437 },
  { name: "Tech Meetup", date: "2025-01-16", lat: 37.7749, lng: -122.4194 },
];

// Function to find events happening today
function findEventsHappeningToday(events) {
  // Your code here
  let date = new Date();
  let today = date.toISOString().split("T")[0];

  console.log(today);

  events = events.filter((event) => event.date === today);

  if (events.length === 0) return "No Event Today";

  let ans = "";

  events.map((event) => {
    if (ans) {
      ans += ", ";
    }
    ans += event.name;
  });

  return ans;
}

// Call the function and log the result
const todayEvents = findEventsHappeningToday(events);
console.log("Events happening today:", todayEvents);
