function checkGmailDomain(email, domain) {
  //code here
  const valid = email.indexOf(domain)
  
  if(valid == -1) return true;

  return false;
}

const email = "user@example.com";
const domain = "@gmail.com";

checkGmailDomain(email, domain);
