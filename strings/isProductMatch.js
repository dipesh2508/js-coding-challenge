function isProductMatch(query, description) {
  //code here
  if (description.includes(query)) return true;

  return false;
}

let query = "red shoes";
let productDescription = "These are red shoes with comfortable padding.";

const keyword = isProductMatch(query, productDescription);

console.log(keyword);
