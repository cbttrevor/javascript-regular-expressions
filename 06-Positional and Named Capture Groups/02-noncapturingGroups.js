// If you want to skip over certain characters, you can use a non-capturing group to
// move the regular expression engine forward in the sequence.

const inputString = `
Hello, my name is Trevor Sullivan. My credit card number is 9999888877776666 and the expiration date is 02/99.
`;

let regex = /(\d{13,19})(?:.+?)(\d{1,2}\/\d{2})/s;

console.log(inputString.match(regex));

// Learning point: We now have two anonymous groups at array elements [1] and [2]
// Learning point: We used a non-capturing group (?:) to move the regex engine forward, without actually matching