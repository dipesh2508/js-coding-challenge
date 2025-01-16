// Function to check the hemisphere based on latitude
const checkHemisphere = (latitude) => {
  // Your code here
  if (latitude < 0) return "Southern Hemisphere";
  else if (latitude > 0) return "Northern Hemisphere";
  else return "On the Equator";
};

// Example usage
const latitude = 40.73061; // Replace with the latitude of the city
console.log(checkHemisphere(latitude));
