//Practice 01
let str = "Har\""
console.log (str.length)

//Practice 02
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word)? 'is': 'is not'} in the sentence`);


//Practice 03
console.log (word.toLowerCase())

//Practice 04
let str2 = "plaese give rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)

//Practice 05
let friend = "Deepika"
friend[3] = "R"
console.log (friend)