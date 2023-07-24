let ele = document.querySelector('.container');

let anc = document.createElement('h1');
let tn = document.createTextNode('Visit Google Website');
anc.appendChild(tn);
let ret = anc.setAttribute('href', 'http://www.google.com');
console.log(ret);

ele.appendChild(anc);
/*let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text)

 // Add a class name to the li element
 element.className = 'item';
 element.id = 'createdLi';
 element.setAttribute('title', 'mytitle');
element.innerText = '<b>Hello this is created by harry</b>';
 element.innerHTML = '<b>Hello this is created by harry</b>';

 let ul = document.querySelector('ul.list');
 ul.appendChild(element);
  console.log(ul);
 console.log(element);
*/
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

ele.replaceChild(elem2, document.querySelector('.item'));
/*
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);

*/


