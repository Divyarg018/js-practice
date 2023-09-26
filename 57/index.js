//Maps in JS: we can use any type of key or value

const myMap = new Map();

const key1 = 'myStr',
    key2 = {},
    key3 = function () { };

//setting map values

myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');

console.log(myMap);

//getting a value from a map

let value1 = myMap.get(key3);
console.log(value1);

//get the size of the map
console.log(myMap.size);

//you can loop using for..of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);
}

//get only keys
for(let key of myMap.keys()){
    console.log('key is ', key);
}

//get only values
for(let value of myMap.values()){
    console.log('value is ', value);
}

//you can loop through the map using for each loop
myMap.forEach((value, key)=>{
    console.log('key is ', key);
    console.log('value is ', value);
})

//converting map to an array

let myArray = Array.from(myMap);
console.log('Map to array is ', myArray);

//converting map keys to an array

let myKeysArray = Array.from(myMap.keys());
console.log('Map to keys array is ', myKeysArray);

//converting map values to an array

let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is ', myValuesArray);


