var x = 15; //setting global variable
function Global_Function1() { //creating function
    document.write(85 + x + "<br>"); // defining id to match the string 
}
function Global_Function2() { //creating function
    document.write (x - 65 + "<br>" + "<br>"); // defining id to match the string 
}
Global_Function1(); //activate the function
Global_Function2(); //activate the function

function Local_Function1() { //creating function
    var x = 10; //testing local variable
    document.write(85 + x + "<br>"); // defining id to match the string 
}
function Local_Function2() {//creating function
    document.write (x - 65 + "<br>" + "<br>"); // defining id to match the string 
}
Local_Function1(); //activate the function
Local_Function2(); //activate the function

function Local_Function1() { //creating function
    var x = 10; //setting variable
    console.log(85 + x + "<br>"); //testing debug chrome
}
function Local_Function2() { //creating function
    console.log (x - 65 + "<br>" + "<br>"); //testing debug chrome
}
Local_Function1(); //activate the function
Local_Function2(); //activate the function

function get_Date() { //creating function
    if (new Date().getHours() < 12){ //defining if statement
        document.getElementById("Morning").innerHTML = "Good morning!"; // defining id to match the string 
    }
}

if (10>5) { //defining if statement
    document.write("Left number is greater than right number") // defining id to match the string 
}

function get_Drink() { //creating function
    var Age; //setting variable  
    Age = document.getElementById("Age").value; // defining id to match the string 
    if (Age > 21) { //defining if statement
        document.getElementById("CanDrink").innerHTML = "You can drink!"; // defining id to match the string 
    }
    else { //defining else statement
        document.getElementById("CanDrink").innerHTML = "You can't drink."; // defining id to match the string 
    }
}

function Time_function() { //creating function
    var Time = new Date().getHours(); //setting variable
    var Reply; //setting variable
    if (Time < 12 == Time > 0) { //defining if statement
        Reply = "It is morning time!"; //defining if result
    }
    else if (Time > 12 == Time < 18) { //defining else..if statement
        Reply = "It is afternoon"; //defining else if result
    }
    else { //defining else statement
        Reply = "It is evening time." //defining else result
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // defining id to match the string 
}