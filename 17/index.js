// console.log("This is tutorial 17 on events");

// document.getElementById("heading").addEventListener("click", function(e) {
//   let variable;
//   console.log("You have clicked the heading");
//   // variable = e.target;
//   // variable = e.target.className;
//   // variable = Array.from(e.target.classList);

//   // variable = e.target.id;
//   // variable = e.offsetX;
//   // variable = e.offsetY;
//   // variable = e.clientX;
//   // variable = e.clientY;
//   // console.log(variable);
//   // location.href = '//brainsmartlabs.com'
// });

let evHand = function (e) {
  console.log("You have clicked the heading");
  let xAxis = e.offsetX;
  let yAxis = e.offsetY;
  console.log("You have clicked your mouse on " + xAxis + " and " + yAxis);
}

let ele = document.getElementById("heading")
ele.addEventListener("click", evHand);