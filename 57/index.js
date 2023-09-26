//Maps in JS: we can use any type of key or value

const myMap = new Map();

const key1 = 'myStr',
key2 ={},
key3 = function(){};

//setting map values

myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');

console.log(myMap);

//getting a value from a map

let value1 = myMap.get(key3);
console.log(value1);
