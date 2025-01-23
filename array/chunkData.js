function chunkData(data, chunkSize) {
  //Your code here
  const chunkedData = [];
  let index = 0;
  while (index < data.length) {
    chunkedData.push(data.slice(index, index + chunkSize));
    index += chunkSize;
  }
  return chunkedData;
}

// Example Usage:
const data = ["User1", "User2", "User3", "User4", "User5"];
const chunkSize = 2;

const chunkedData = chunkData(data, chunkSize);

console.log(chunkedData);
// Output: [["User1", "User2"], ["User3", "User4"], ["User5"]]
