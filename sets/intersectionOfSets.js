function intersectionOfSets(setA, setB) {
  // Your Code here
  const intersectionSet = new Set();
  setA.forEach((value) => {
    if (setB.has(value)) {
      intersectionSet.add(value);
    }
  });
  return intersectionSet;
}
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
console.log(intersectionOfSets(setA, setB)); // Output: Set(1) {3}
