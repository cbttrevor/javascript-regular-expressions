// The text "Hello" looks like a proper name, because it has a capitalize first letter. However, it's a greeting.

var testString = 'Hello, Bobby, Joe, and Sally!';

// Objective: Let's find all the proper names, and exclude the greeting, "Hello"

var regex = /(?<!^)([A-Z]\w{2,6})/g;

// Using the .match() method on String objects, we can find all proper names.
console.log(testString.match(regex));