let people = ["Harry", "Rohan", "SkillF", "Shumbham", "Vikrant"];


// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
    
// }

let obj = {
    name: "Harry",
    language: "JavaScript",
    hobbies: "Android app development"
}
// console.log(obj);

// Iterating an object
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
    
// }

for(let key in obj){
    console.log(obj[key]);
}

myString  = "this is my string";

for(let char in myString){
    console.log(myString[char]);
}

// for of
console.log("******for of loops starts here********");
people = ["Harry", "Rohan", "SkillF", "Shumbham", "Vikrant"];

for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}