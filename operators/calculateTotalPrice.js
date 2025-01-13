
function calculateTotalPrice(price, taxRate) {
    // Your code here
    return price + (price * taxRate);
  }
  
  // Example usage:
  console.log(calculateTotalPrice(100, 0.05)); // Output: 105
  console.log(calculateTotalPrice(50, 0.1));   // Output: 55
  