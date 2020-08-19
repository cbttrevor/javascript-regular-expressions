/*
    Depending on each part of your regex, it may be greedily matching or lazily matching.
    When you're debugging regular expressions, it's important to know how to use the proper matching expressions
    to specify greedy or lazy matching.
*/

// Let's pretend we're screen-scraping a website, and got back some ugly HTML.
var input = `<div id="bacon"><h2 class="header">My Header</h2><h2 style="font-family: Roboto Mono;">Header Monospace</h2></div>`;

// Objective: Gather up all of the HTML attribute values, from each HTML element.
// The obvious solution is to match any characters inside of a double-quoted string, as follows.
var regex = /".+"/;

console.log(input.match(regex));

// Oh no, what happened? Why did we get back this huge, long string?
// It's because the regex engine is being greedy, and trying to match as many characters as possible.

// To resolve this, let's apply the lazy modifier. This prevents the regex engine from greedily consuming extra characters.
var regex2 = /".+?"/g;

console.log(input.match(regex2));
