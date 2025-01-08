
function calculateTimeRemaining(startTime, endTime) {
    //your code here
    const start = new Date(startTime);
    const end = new Date(endTime);
    const timeDifference = end - start;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor((timeDifference / 1000 / 60 / 60) % 24) + 24 * days;
    return { hours, minutes, seconds };
  }
  
  // Example usage
  console.log(calculateTimeRemaining("2024-12-18T00:00:00Z", "2024-12-31T23:59:59Z"));
  // Output: { hours: 335, minutes: 59, seconds: 59 }
  
  console.log(calculateTimeRemaining("2024-12-18T12:00:00Z", "2024-12-19T14:30:45Z"));
  // Output: { hours: 26, minutes: 30, seconds: 45 }
  