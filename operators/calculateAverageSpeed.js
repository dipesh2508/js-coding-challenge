function calculateAverageSpeed(totalDistance, totalTime) {
  // Your code here
    return (totalDistance / totalTime).toFixed(2);
}

// Example usage:
console.log(calculateAverageSpeed(150, 3)); // Output: 50.00
console.log(calculateAverageSpeed(100, 2)); // Output: 50.00
console.log(calculateAverageSpeed(300, 7)); // Output: 42.86
