// Global mode causes regex objects to become stateful. They will track their progression through a sequence.

var testString = 'Hello, Sally and Bobby.';

var regex = /([SB]\w{4})/g;

console.log(regex.exec(testString));
console.log(regex.exec(testString));

// Learning point: The second time we call the .exec() method, the regex will pick up where it left off, and continue matching.