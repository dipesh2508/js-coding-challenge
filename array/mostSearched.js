function mostSearched(searches) {
  //Your code here
  const map = new Map();
  searches.forEach((search) => {
    if (map.has(search)) {
      map.set(search, map.get(search) + 1);
    } else {
      map.set(search, 1);
    }
  });

  let max = 0;
  let mostSearched = "";
  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      mostSearched = key;
    }
  }

  return mostSearched;
}

// Example Usage:
const searches = ["Phone", "Laptop", "Phone", "Phone", "Tablet", "Laptop"];

const result = mostSearched(searches);

console.log(result); // Output: "Phone"
