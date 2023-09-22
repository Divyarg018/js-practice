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

if (result){
console.log(result);
console.log(result.input);
console.log(result.index);
}
// result = reg.exec(s);
// console.log(result);  //we can use multiple exec with global flag

//2. test() - Returns true or false
 let result2 = reg.test(s);
//  console.log(result2);// this will only print true if the "reg" is there in a string "s"

//3.match() - it will return an array of results or null

let result3 = s.match(reg) // this is right
console.log(result3);

//4. search() - returns index of first match or -1

let result4 = s.search(reg)
console.log(result4);

// 5. replace() - returns new replace string with all the replacements(if no flag is given, first match will be replaced)

let result5 = s.replace(reg, 'SHUBHAM');
console.log(result5);


