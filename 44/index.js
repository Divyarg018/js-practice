let a = "Rocky Bhai";
a = undefined;
if(a != undefined){
    throw new Error('This is not undefined')
}
else{
    console.log('This is undefined');
}

try{
    console.log("We are inside try block");
    // functionHarry();
}catch (error){ 
    console.log('Are you OK?');
    // console.log(error.name);
    console.log(error.message);
}finally{
    console.log("Finally we will run this");
}