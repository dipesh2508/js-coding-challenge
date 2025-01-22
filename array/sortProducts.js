function sortProducts(products, sortBy, order = "asc") {
  //Your code here
  if (sortBy === "name") {
    if (order === "asc") {
      return products.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return products.sort((a, b) => b.name.localeCompare(a.name));
    }
  }
  if (sortBy === "price") {
    if (order === "asc") {
      return products.sort((a, b) => a.price - b.price);
    } else {
      return products.sort((a, b) => b.price - a.price);
    }
  }
}

// Example Usage:
const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 800 },
  { name: "Hat", price: 300 },
  { name: "Jeans", price: 1000 },
];

// Sort by name (ascending)
console.log(sortProducts(products, "name", "asc"));
// Output: [{name: "Hat", price: 300}, {name: "Jeans", price: 1000}, {name: "Shirt", price: 500}, {name: "Shoes", price: 800}]

// Sort by price (descending)
console.log(sortProducts(products, "price", "desc"));
// Output: [{name: "Jeans", price: 1000}, {name: "Shoes", price: 800}, {name: "Shirt", price: 500}, {name: "Hat", price: 300}]
