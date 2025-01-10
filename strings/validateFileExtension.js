// Function to validate the file extension
function validateFileExtension(fileName) {
  //code here
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
  const fileExtension = fileName.slice(fileName.lastIndexOf("."));
  if (allowedExtensions.includes(fileExtension))
    console.log("Valid file type. You can upload the file.");
  else
    console.log(
      "Invalid file type. Please upload a .jpg, .jpeg, .png, or .gif file."
    );
}

// Test the function
validateFileExtension("profile-picture.jpg");
// Valid file type. You can upload the file.
validateFileExtension("document.pdf");
// Invalid file type. Please upload a .jpg, .jpeg, .png, or .gif file.
