function calculateDiscountedPrice(originalPrice, discountPercentage) {
  //Your Code Here
  return originalPrice - (originalPrice * discountPercentage) / 100;
}

// Example usage:
console.log(calculateDiscountedPrice(100, 20)); // Output: 80
console.log(calculateDiscountedPrice(250, 10)); // Output: 225
