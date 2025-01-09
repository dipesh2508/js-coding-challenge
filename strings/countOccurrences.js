
function countOccurrences(str, word) {
    //code here
    const splitArray = str.split(" ");

    const reduced = splitArray.reduce((acc, ele) => {
        if (ele.includes(word)){
            return ++acc;
        }
        return acc;
    }, 0)

    return reduced
    
  }
  const comment = "This product is great. The quality is great and it's a great value.";
  const wordToCount = "great";
  
  const count = countOccurrences(comment, wordToCount);
  console.log(`The word ${wordToCount} appears ${count} times in the comment.`);  