let regex = /harrydhfhk/;
//metacharacter symbols
regex = /^harrdc/; //^ means expression will match if string starts with
//The string harry is harry does not matches the expression ^harrdc
regex = /harry$/; // $ means expression will match if string ends with
//The result from exec is  ['harry', index: 9, input: 'harry is harry', groups: undefined]
//index.js:13 The string harry is harry matches the expression harry$
regex = /h.rry/;// . matches any one character
regex = /h*rry/;// . matches any 0 or more character 
regex = /ha?rryi?t/;// ? after character means that character is optional 
regex = /h\*rry/;  //
let str = "h*rry means codewith";


let result = regex.exec(str);
console.log("The result from exec is ",result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}