const students = [
    { name: "harry", subject: "JS" },
    { name: "rohan", subject: "MI" }
]

function enrollStudent(student) {

    return new Promise(function(resolve, reject){
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        }, 5000);

    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Student have been fetched");
    }, 1000);
}

let newStudent = { name: "Sunny", subject: "python" }
enrollStudent(newStudent).then(function(){
    getStudents();
}).catch(function(){
    console.log('Some error occured');
});
// getStudents();

/*
function inside then is ran as - resolve()
function inside catch is ran as - reject()
*/