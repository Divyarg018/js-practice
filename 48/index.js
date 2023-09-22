// const regex = /^h/i;

//character set - we use []
let regex = /h[a-z]rry/;//can be any character a to z
regex = /h[aty]rry/; //can be any character from a,t,y
regex = /h[^aty]rry/; //cannot be any of a,t or y
regex = /h[^aty]rr[yu]/; //cannot be any of a,t or y + can be u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; //we can have as many character sets as we want

//Quantifiers - we use {} 
regex =/har{2}y/;//r can occur exactly two times
regex =/har{0,2}y/;//r can occur exactly 0-two times

//Groupings- we use parenthesis for groupings()
regex = /(har){2}([0-9]r){3}/;
// const str = "harry bhai";
str = "harry bhai"
str = "harhar1r4r5r bhai"

let result = regex.exec(str);
console.log("The result from exec is ",result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}