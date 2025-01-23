function countTags(tags) {
  //Your code
  const map = new Map();

  tags.forEach((tag) => {
    if (map.has(tag)) {
      map.set(tag, map.get(tag) + 1);
    } else {
      map.set(tag, 1);
    }
  });

  return Object.fromEntries(map);
}

// Example Usage:
const tags = ["css", "html", "css", "js", "html", "js", "js"];

const result = countTags(tags);

console.log(result);
// Output: { css: 2, html: 2, js: 3 }
