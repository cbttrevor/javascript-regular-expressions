/* 
    There are a variety of options that can be optionally applied to regular expression objects 
    in JavaScript. These options are specified after the closing forward slash of the 
    regular expression.

    /regex/g - return all matches, not just the first match
    /regex/m - enables multi-line mode, where ^ and $ match the beginning / end of each line
    /regex/s - forces single-line mode, where ^ and $ match the beginning / end of the entire string
    /regex/i - performs a case-insensitive match
*/

const testString = `Instead of taking the bus to work, Trevor rode his bicycle.
Riding a bicycle is more enjoyable, since you can hear the sounds 
of nature and feel the wind whipping past.

My favorite microphone is the AudioTechnica AT2020.`;

// What if you have a multi-line string and use multi-line mode?

// Let's enable multi-line mode and global mode.
let firstWordM = /^\w+/gm;
let result;
while ((result = firstWordM.exec(testString)) != null | undefined) {
    console.log(result[0]);
}
