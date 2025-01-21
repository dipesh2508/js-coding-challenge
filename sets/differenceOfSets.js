function differenceOfSets(setA, setB) {
  // Your Codde here
  const differenceSet = new Set(setA);
  setB.forEach((value) => {
    differenceSet.delete(value);
  });
  return differenceSet;
}
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
console.log(differenceOfSets(setA, setB)); // Output: Set(2) {1, 2}
