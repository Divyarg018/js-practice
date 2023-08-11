let today = new Date();
//console.log(typeof today);
let otherDate = new Date('8-4-2003 04:54:08');
//otherDate = new Date('June 13 1976');
//otherDate = new Date('09/16/1976');
console.log(otherDate);
let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
//a = otherDate.getSeconds();
//a = otherDate.getHours();
//a = otherDate.getTime();
//console.log(a);
//otherDate.setDate(23);
otherDate.setMonth(0);
// otherDate.setFullYear(1900);
// otherDate.setMinutes(2);
// otherDate.setHours(1);
// otherDate.setSeconds(3);
 //console.log(otherDate);

//  let ms = Date.now();
//  console.log(ms);

// let demo = Date.parse('Aug 10 2023 00:00:00');
// console.log(demo);

const b = new Date('10/08/2023 DD/MM/YYYY 00:00:00');
//let date = b.toLocaleDateString();
//let date = b.toLocaleString();
let date = b.toString();
//let date = b.valueOf();
console.log(date);

// const date1 = new Date('Aug-11-2022 10:00:00');
// console.log(date1.valueOf());
