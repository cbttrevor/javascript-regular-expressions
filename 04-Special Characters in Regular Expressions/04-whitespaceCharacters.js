// You can use \s and \S to match Whitespace and non-Whitespace characters

// Objective: Optimize the file size of our data file, without corrupting the data.

let str = 
`
London | United Kingdom
Chicago | United States
Seattle | United States
New York | United States
`;

var regex = /\s+\|\s+/my;

console.log(str=str.replaceAll(regex, '|'));
