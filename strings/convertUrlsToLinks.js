function convertUrlsToLinks(text) {
  //code here
  return text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1">$1</a>');
}

let updatedText = convertUrlsToLinks(
  "Visit our website at http://example.com for more information. Also, check out https://google.com for other resources."
);
console.log(updatedText);
