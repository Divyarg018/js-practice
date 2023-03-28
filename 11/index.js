const hello = () => {
    console.log ("Hey how are you.I am toh fine yar")
    return "hi"
}
function onePlusAvg(x,y){
    return 1 + (x+y)/2
}
const sum = (p,q) =>{
    return p+q
}

let a = 1;
let b = 2;
let c = 3;
// let v = hello();
// console.log(v)
console.log ("one plus average of a and b", onePlusAvg(a,b))
console.log ("one plus average of b and c", onePlusAvg(b,c))
console.log ("one plus average of a and c", onePlusAvg(a,c))
console.log(sum(9,7))