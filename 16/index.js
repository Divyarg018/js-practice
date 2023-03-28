let marks_class_12 = [91, 82, 63, 84, false, "Not present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) //will be undefined because index 6 does not exist
console.log("the length of marks_class_12", marks_class_12.length)
marks_class_12[6] = 89 // adding a new value to the array
marks_class_12[0] = 89 // changing value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)