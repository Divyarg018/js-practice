const students = [
    {name: "harry", subject:"JS"},
    {name: "rohan", subject:"MI"}
]

function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 3000);
}

function getStudents(){
    setTimeout(function(){
      let str = "";
      students.forEach(function(student){
        str += `<li>${student.name}</li>`
      });
      document.getElementById('students').innerHTML = str; 
      console.log("Student have been fetched"); 
    }, 1000);
}

let newStudent = {name: "Sunny", subject: "python"}
enrollStudent(newStudent, getStudents);
// getStudents();