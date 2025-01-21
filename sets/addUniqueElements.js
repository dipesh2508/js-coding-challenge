function addUniqueElements(arr) {
  // Your Code here

  const set = new Set();
  arr.forEach(element => {
    set.add(element);
  });

  return set;

  //or simply return new Set(arr);
}
console.log(addUniqueElements([1, 2, 2, 3, 4, 4, 5]));
// Output: Set(5) {1, 2, 3, 4, 5}
