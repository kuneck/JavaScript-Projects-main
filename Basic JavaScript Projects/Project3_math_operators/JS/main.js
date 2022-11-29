function addition_function(){ //defining function
  var addition = 2 + 2; //defining variable
  document.getElementById("Math").innerHTML = "2 + 2 = " + addition; // defining id to match the string
}

function subtraction_function(){ //defining function
  var Subtraction = 5 - 2; //defining variable
  document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction; // defining id to match the string
}

function multiplication_function(){ //defining function
  var simple_math = 6 * 8; //defining variable
  document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_math; // defining id to match the string
}

function division_function(){ //defining function
  var simple_math = 48 / 6; //defining variable
  document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_math; // defining id to match the string
}

function more_Math(){ //defining function
  var simple_math = (1+2) * 10 / 2 - 5; //defining variable
  document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math; // defining id to match the string
}

function modulus_Operator(){ //defining function
  var simple_math = 25 % 6; //defining variable
  document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math; // defining id to match the string
}

function negation_operator(){ //defining function
  var x = 10; //defining variable
  x++; //defining increment operators
  x--; //defining decrement Operators
  document.getElementById("Math7").innerHTML = -x; // defining id to match the string
}

window.alert(Math.random()*100); //defining alert

