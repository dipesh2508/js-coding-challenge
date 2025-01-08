
function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {
    //code here
    const totalPrice = price*quantity;
    if(quantity > discountThreshold){
        return totalPrice - (discountRate*totalPrice)/100;
    }

    return totalPrice;
}

// Example usage
console.log(calculateBulkDiscount(50, 15, 10, 10)); // Output: 675
console.log(calculateBulkDiscount(50, 5, 10, 10));  // Output: 250
console.log(calculateBulkDiscount(100, 20, 15, 20)); // Output: 1600
 