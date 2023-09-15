let reg = /harry/;// this is a regular expression literal in js
//  reg = /harry/g;// g means global 
//  reg = /harry/i;// i means case sensitive 

console.log(reg);
console.log(reg.source);




let s = "This is great code with harry and also harry bhai";
/*Functions to match expressions

1. exec() - This function will return an array for match or null for no match
*/

let result = reg.exec(s);
console.log(result);
console.log(result.input);
console.log(result.index);
// result = reg.exec(s);
// console.log(result); --> we can use multiple exec with global flag

