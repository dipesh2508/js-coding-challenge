function getSuggestions(products, query) {
  const arr = [];

  products.forEach((product) => {
    if (product.toLowerCase().includes(query.toLowerCase())) {
      arr.push(product);
    }
  });

  return arr;
}

// Example Usage:
const products = ["Shirt", "Shoes", "Hat", "Jeans"];
const query = "Sh";
const suggestions = getSuggestions(products, query);

console.log(suggestions); // Output: ["Shirt", "Shoes"]
