document.write(typeof "Test" + "<br>"); //setting typeof operator

document.write(2E310 + "<br>"); //getting infinite result

document.write(-2E310 + "<br>"); //getting negative infinite result

document.write("13" + 37 + "<br>"); //setting 

document.write(10 > 2); // testing Boolean Logic

document.write("<br>"); // Line Breaker

document.write(10 == 10); // testing Boolean Logic

document.write("<br>"); // Line Breaker

document.write(10 == 11); // testing Boolean Logic

document.write("<br>"); // Line Breaker

//Defining variables
w = "9"
x = 10
y = "10"
z = 9
document.write(x === x); // testing Boolean Logic
document.write("<br>"); // Line Breaker

document.write(x === w); // testing Boolean Logic
document.write("<br>"); // Line Breaker

document.write(x === y); // testing Boolean Logic
document.write("<br>"); // Line Breaker

document.write(x === z); // testing Boolean Logic
document.write("<br>"); // Line Breaker

document.write(10 > 8 && 8 > 7); // testing Boolean Logic
document.write("<br>"); // Line Breaker

document.write(10 < 8 && 8 > 7); // testing Boolean Logic
document.write("<br>"); // Line Breaker

document.write(10 < 8 || 8 < 7); // testing Boolean Logic
document.write("<br>"); // Line Breaker

document.write(10 > 8 || 8 > 7); // testing Boolean Logic
document.write("<br>"); // Line Breaker

function positive(){ //defining function
    var test1 = 3E308 * 3; //defining variable
    document.getElementById("demo").innerHTML = "3E308 * 3 = " + test1; // defining id to match the string 
}

function negative(){ //defining function
    var test2 = -3E308 * 3; //defining variable
    document.getElementById("demo2").innerHTML = "-3E308 * 3 = " + test2; // defining id to match the string
}

function not_function() { //defining function
    document.getElementById("Not").innerHTML = !(20 > 10); // defining id to match the string
}

function not_function2() { //defining function
    document.getElementById("Not2").innerHTML = !(20 < 10);  // defining id to match the string
}

console.log(2+6); //setting console.log method

console.log(8<5); //setting console.log method



