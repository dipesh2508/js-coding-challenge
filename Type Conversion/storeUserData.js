function storeUserData(user) {
  //code here
  let userData = JSON.stringify(user);
  localStorage.setItem("user", userData);
}

// Example usage:
let user = { name: "Alice", age: 30 };
storeUserData(user);
