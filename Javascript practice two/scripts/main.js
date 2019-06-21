/*
Commenting in JS uses the same syntax as if you were commenting in CSS
*/

// or if it is on a single line, no line breaks, you can just use two forward slashes 

// window.alert("Please click okay to move on");

// Object
var person = {
    firstName : "James",
    lastName  : "Salo",
    age     : 23,
    eyeColor  : "Grey"
  };
  
  document.getElementById("js_object").innerHTML =
  person.firstName + " is " + person.age + " years old.";


var motorcycle = {type:"Cruiser", model:500, color:"grey"};
document.getElementById("demo").innerHTML = "The motorcyle type is a " + motorcycle.type;



// Array
  var cars = ["Saab","Volvo","BMW"];

document.getElementById("js_array").innerHTML = cars[0];



// Function
function mathFunction(a, b) {
  return a * b;
}

document.getElementById("js_function").innerHTML = mathFunction (10,2);


var x = 5.334;         
document.getElementById("to_fixed").innerHTML = x.toFixed(5)


var x = 7.6564;     
document.getElementById("to_Precision").innerHTML = x.toPrecision(4)