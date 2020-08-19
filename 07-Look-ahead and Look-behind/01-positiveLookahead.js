/*
    Positive look-ahead means that you expect a certain pattern to follow a pattern that you're match.
*/
var testString = 'Are you going to the store today? I would like to buy some eggs, milk, bacon, and cheese.';

// Objective: Let's find the last ingredient in the list of grocery store items.

// In this regular expression, we use positive look-ahead (?=) to find the last ingredient in the sentence.
  // The \w+ simply means that we want 0 or more word characters (alphanumeric)
  // The (?=\.) positive look-ahead pattern means we expect a literal period to follow the word
var regex = /\w+(?=\.)/;

// We expect the resulting value to be 'cheese'
console.log(testString.match(regex));

// There are two sentences in the test string. What would happen if we changed the positive look-ahead
//   pattern to be (?=\?) instead?

var regex = /\w+(?=\?)/;
console.log(testString.match(regex));

// You'll notice that we matched the word "today" instead of "cheese."
// That's because "today" is the first word that is followed by a literal question mark.