// We can use negative look-ahead to ensure that our desired pattern is NOT followed by 
// another pattern.

var testString = `Bacon, Sausage, Beef, Crackers, Turkey, Chicken`;

// While there are a couple of ways that we could match "Chicken", how can we accomplish this
// using negative look-ahead?

// In this example, we're looking for a word starting with capital "C" and ending with lower-case "n"
  // That word may have additional word characters
  // Also, there must NOT be a comma directly following the word
var regex = /C\w+n(?!,)/;

console.log(testString.match(regex));