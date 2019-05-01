console.log("Spamela Anderson");
let spamList = [];

customers.forEach(customer => {
  let eachEmail = customer.contacts.email.filter(email => {
    return email.includes("com");
  });
  spamList = spamList.concat(eachEmail);
});

console.log(spamList);
