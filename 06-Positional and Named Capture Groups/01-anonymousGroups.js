// Capture groups are helpful for identifying the various "pieces" of your regular expression.
// Instead of using multiple regular expressions, you can use a single regex to match different pieces of an input string.

const inputString = `
Hello, my name is Trevor Sullivan. My credit card number is 9999888877776666 and the expiration date is 02/99.
`;

let regex = /(\d{13,19}).*?(\d{1,2}\/\d{2})/;

console.log(inputString.match(regex));

// Learning point: The entire match is the first item in the array. The first group is the second array element.

