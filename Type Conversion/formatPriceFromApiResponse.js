function formatPriceFromApiResponse(apiResponse) {
  //code here
    const price = parseFloat(apiResponse.price);
    return `$${price.toFixed(2)}`;
}

// Example usage:
const apiResponse = {
  productId: 12345,
  productName: "Laptop",
  price: "999.99", // Price returned as a string
  available: true,
};

console.log(formatPriceFromApiResponse(apiResponse)); // "$999.99"
