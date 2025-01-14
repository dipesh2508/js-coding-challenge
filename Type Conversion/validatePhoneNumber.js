
function validatePhoneNumber(phoneInput) {
    //code here
    let phone = phoneInput.trim();
    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (phonePattern.test(phone)) {
      console.log("Valid phone number");
    } else {
      console.log("Invalid phone number");
    }
   }
   
   // Example usage:
   let phoneInput = " 555-123-4567 ";
   validatePhoneNumber(phoneInput);
   
   
     