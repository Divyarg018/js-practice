let myBtn = document.getElementById("myBtn");
let conten = document.getElementById("content");

function getData() {
    console.log("Started getData");
    url = "https://api.github.com/users"
    fetch(url).then((response) => {
        console.log("Inside first then");
        return response.json();
    }).then((data) => {
        console.log("Inside second then");
        console.log(data);
    })
}

function postData() {

    url = "https://dummy.restapiexample.com/api/v1/create";
    data = '{"name": "fvgbyzx582186", "salary": "123", "age":"23"}'
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response => response.json())
    .then(data =>console.log(data)
    )
}
// console.log("Before running getData");

// getData();
// console.log("Before after getData");

postData()