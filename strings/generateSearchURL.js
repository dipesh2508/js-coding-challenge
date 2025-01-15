function generateSearchURL(baseURL, searchQuery, categoryFilter) {
  //code here
  const searchParams = new URLSearchParams();
  searchParams.append("q", searchQuery);
  searchParams.append("category", categoryFilter);
  return `${baseURL}?${searchParams.toString()}`;
}

// Example usage
let baseURL = "https://www.example.com/search";
let searchQuery = "apple";
let categoryFilter = "electronics";

let fullURL = generateSearchURL(baseURL, searchQuery, categoryFilter);
console.log(fullURL); // Output: https://www.example.com/search?q=apple&category=electronics