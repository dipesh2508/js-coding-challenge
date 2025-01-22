function groupByCategory(posts) {
  //Your code here
  return posts.reduce((groupedPosts, post) => {
    const { category, title } = post;
    if (!groupedPosts[category]) {
      groupedPosts[category] = [];
    }
    groupedPosts[category].push(title);
    return groupedPosts;
  }, {});
}

// Example Usage:
const posts = [
  { title: "Learn JS", category: "Programming" },
  { title: "CSS Tips", category: "Web Dev" },
  { title: "Master React", category: "Programming" },
  { title: "HTML Basics", category: "Web Dev" },
];

const result = groupByCategory(posts);
console.log(result);
// Output:
// {
//   "Programming": ["Learn JS", "Master React"],
//   "Web Dev": ["CSS Tips", "HTML Basics"]
// }
