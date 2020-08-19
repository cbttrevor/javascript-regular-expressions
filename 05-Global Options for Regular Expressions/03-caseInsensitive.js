// By default, JavaScript regular expressions are case sensitive
// You can disable this functionality by specifying the 'i' option on your RegEx object

var sentence = 'Trevor, are you going to the store? trevor! Or is your name travis? Or is it Timothy?';

// Objective: Match all of the names starting with "T" or "t"

var re = /t\w{4,6}/ig;

console.log(sentence.match(re));

// Learning point: Even though we specified a regex starting with lower-case "t", it still matched all of the
// words starting with upper-case "T" as well. That's because we added the 'i' option.