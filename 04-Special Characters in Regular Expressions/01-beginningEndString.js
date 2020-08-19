// You can use the ^ and $ characters in a regular expression to match the beginning
// or end of a string, respectively.

const testString = `Instead of taking the bus to work, Trevor rode his bicycle.
Riding a bicycle is more enjoyable, since you can hear the sounds 
of nature and feel the wind whipping past.

My favorite microphone is the AudioTechnica AT2020.`;

// Match the beginning of a string
let firstWord = /^\w+/;
console.log(firstWord.exec(testString)[0]);

// Learning point: The ^ character matches the beginning of a string.

// Match the end of a string
let lastWord = /[\w\d]{6,}\.$/;
console.log(lastWord.exec(testString)[0]);

// Learning point: The $ character matches the end of a string.

