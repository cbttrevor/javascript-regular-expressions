// You can use \s and \S to match Whitespace and non-Whitespace characters

// Objective: Optimize the file size of our data file, without corrupting the data.

let str = 
`
London |   United Kingdom
Dresden     |  Germany
Chicago     | United States
Seattle |    United States
New York   |     United States
   Paris    |     France
`;

// Let's set our initial pattern to look for any Whitespace surrounding the pipe delimiter
var regex = /\s+\|\s+/gm;

// We use the String.replace() function to search for a pattern and replace it with something else
console.log(str=str.replace(regex, '|'));

// This looks much better, but we still have some random Whitespace at the beginning of the lines.

var regex2 = /^\s+/gm;
console.log(str.replace(regex2, ''));