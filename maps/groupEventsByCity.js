function groupEventsByCity(events) {
  // Your Code here
  return events.reduce((acc, event) => {
    if(!acc[event.city]){
        acc[event.city] = []
    }

    acc[event.city].push(event.name);

    return acc;
  }, {})
  
}

// Example usage:
const events = [
  { name: "Concert", city: "New York", lat: 40.73061, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "New York", lat: 40.73061, lng: -73.935242 },
];

const groupedEvents = groupEventsByCity(events);

// Display the grouped events
for (const city in groupedEvents) {
  console.log(city + ": [" + groupedEvents[city].join(", ") + "]");
}
