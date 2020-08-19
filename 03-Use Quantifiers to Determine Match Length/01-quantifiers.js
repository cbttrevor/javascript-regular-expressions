// Quantifiers help determine how long a match should be.

// "At least" 3 characters long (greedy) {3,}
// "Exactly" 6 characters long {6}
// "At most" 4 characters long {,4}
// "At least" 6 characters long (lazy) {6,}?

let testString = 'Hello my credit card number is 4242424242424242 and it expires 12/25. The CVV code is 999.'

// Match the credit card number
let cardNumber = /\d{16}/;

// Match the expiration date
let expiry = /\d{1,2}\/\d{2}/;

console.log(cardNumber.exec(testString));
console.log(expiry.exec(testString));