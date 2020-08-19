// You can match any alphanumeric (word) character using \w

var input = 'Are you going to the grocery store? I need more bacon, ice cream, and cake.';

var re = /\w+/g;

console.log(input.match(re));

// Learning point: Using \w in conjunction with a simple quantifier, you can parse all the words in a sentence.