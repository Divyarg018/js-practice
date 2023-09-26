//set stores unique values
const mySet = new Set(); //initialize an empty set
console.log('The set looks like :', mySet);

//adding values to the set
mySet.add('this');
mySet.add('My name');
mySet.add('that');
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add('that2');
console.log('The set looks like this now:', mySet);

//use a constructor to initialize the set
let mySet2 = new Set([1, 45, 'this', false, {a:4, b:8}, 'this']);
console.log('New set:', mySet2);


console.log(mySet.size); // get the size of the set

console.log(mySet.has(34));// check whether set has 34 or not

console.log('Before removal', mySet.has('that2'));
mySet.delete('that2');//remove an element from the set
console.log('after removal', mySet.has('that2'));

//iterating a set
// for(let item of mySet){
//     console.log('Item is :', item);
// }

mySet.forEach((item)=>{
    console.log('Item is :', item);
    
})
