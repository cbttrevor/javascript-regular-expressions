// Creating a regular expression is done using forward slashes
var regex = /trevor/;

// You can also use the RegExp constructor to create a RegEx object
var re = new RegExp('trevor');

console.log(re, regex)

// Define a string to test regular expressions against
let testString = 'Trevor says hi Trevor';

// The .test() method simply returns a boolean value, indicating successful match or not
let result = regex.test(testString);
console.log(result);

// Let's use the .exec() method to find matches in the test string
let execresult = regex.exec(testString);
console.log(execresult);

// You can use the matchAll() method on a string to perform a match
console.log(testString.match(re));
// let allmatches = testString.matchAll(re);

// console.log([...allmatches]);