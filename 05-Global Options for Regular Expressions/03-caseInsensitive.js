// By default, JavaScript regular expressions are case sensitive
// You can disable this functionality by specifying the 'i' option on your RegEx object

var sentence = 'Trevor, are you going to the store? trevor! Or is your name travis? Or is it Timothy?';

// Objective: Match all of the names starting with "T" or "t"

var re = /t\w{4,6}/ig;

console.log(sentence.match(re));