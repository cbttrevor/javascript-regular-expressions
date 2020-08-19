// Learning point: You can use character classes to specify a series of characters
// that you'd like to match.

var testString = 'Hello, you want 3 onions?';
var digit = /[\d]/;
console.log(digit.exec(testString));

var digit2 = /[4-9]/;
console.log(digit2.exec(testString));

