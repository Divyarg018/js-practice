let myBtn = document.getElementById("myBtn");
let conten = document.getElementById("content");

function getData() {
    console.log("Started getData");
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        console.log("Inside first then");
        return response.json();
    }).then((data)=>{
        console.log("Inside second then");
        console.log(data);
    })
}
console.log("Before running getData");

getData();
console.log("Before after getData");
