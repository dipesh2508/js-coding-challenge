function containsElement(mySet, element) {
  // Write your code here
  return mySet.has(element);
}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(containsElement(mySet, 3)); // Output: true
