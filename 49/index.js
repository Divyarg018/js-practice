//character classes
let regex = /\war/; // word character_or alphabet or numbers

regex = /\w+d1r/;//['harhard1r', index: 0, input: 'harhard1r4r5r bhai', groups: undefined]
// \w+ means one or more word characters

regex = /\Wbhai/; //  non word character
//[' bhai', index: 14, input: 'harh%7rd1r4r5r bhai', groups: undefined]

 regex = /\W+bhai/; // \W+ means more than 1 non word character.
//  [' %%$@bhai', index: 13, input: 'harh7rd1r4r5r %%$@bhai', groups: undefined]
//str = "harhard1r4r5r bhai"

regex = /number \d999/; // \d means digit.
// ['number 9999', index: 32, input: 'harh7rd1r4r5r %%$@bhai harry ka number 9999999999', groups: undefined]
regex = /number \d+/; // \d+ means more than 1 digits.
regex = /\D999/;// D means non digit
regex = /\D+999/;// D+ more than one non digit
str = "harh7rd1r4r5r %%$@bhai harry ka number 899999harry9999"

let result = regex.exec(str);
console.log("The result from exec is ",result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}