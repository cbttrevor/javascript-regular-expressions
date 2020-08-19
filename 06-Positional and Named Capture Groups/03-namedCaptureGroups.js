// Named capture groups make it easy to refer back to various matches inside your
// regular expression.

const inputString = `
Hello, my name is Trevor Sullivan. My credit card number is 9999888877776666 and the expiration date is 02/99.
`;

// Notice the syntax for defining a named capture group: (?<name>pattern)
let regex = /(?<cardnumber>\d{13,19}).*?(?<expiry>\d{1,2}\/\d{2})/;

let matches = inputString.match(regex);

console.log(matches);

// Now that we've extracted the necessary data from the input string, let's substitute it in a completely different sentence.
console.log(`Your card number is ${matches.groups.cardnumber} and your expiry is ${matches.groups.expiry}`);

// Learning point: Named capture groups are syntactic sugar on top of anonymous capture groups. However, they're much easier for
// humans to process, by referring to field names instead of array indices.