// A period matches any character, unless it is escaped with a backslash.

var mystr = 'Hello! What is your name?';

var re = /Hello./;

console.log(mystr.match(re));

var mystr2 = 'Hello. What is your name?';

console.log(mystr2.match(re));