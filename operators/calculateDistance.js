function calculateDistance(x1, y1, x2, y2) {
  // Your Code here
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(2);
}

// Example usage:
console.log(calculateDistance(3, 4, 7, 1)); // Output: 5.00
console.log(calculateDistance(0, 0, 5, 12)); // Output: 13.00
