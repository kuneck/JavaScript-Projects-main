//testing a loop function
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//testing a string length property
function length_method() {
let text = "Click here to see this String Length";
let length = text.length;
document.getElementById("Length").innerHTML = length;
}

//testing for loop statement
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y <Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//testing array in functions
function array_function() {
    var stormtrooper = [];
    stormtrooper[0] = "happy";
    stormtrooper[1] = "sad";
    stormtrooper[2] = "angry";
    stormtrooper[3] = "hungry";
    document.getElementById("Mood").innerHTML = "In this picture, the stormtrooper is " + stormtrooper[2] + "."; 
}

//testing constant keyword in array
function constant_function() {
    const Mjölnir = {owner:"Thor", color:"gray", creator:"Brokkr and Sindri"};
    Mjölnir.color = "silver";
    Mjölnir.location = "Asgard";
    document.getElementById("Constant").innerHTML = "Mjölnir is a weapon onwed by " + Mjölnir.owner + ". Has a " + Mjölnir.color + " color" + " and is located in " + Mjölnir.location + ".";
}

//testing let keyword
let x = 10;
{  
let x = 2;
}
document.getElementById("Let_test").innerHTML = x;

//testing the return statement
document.getElementById("Return").innerHTML = myFunction("Stranger");
function myFunction(name) {
  return "Hello " + name;
}

//testing object entity using let 
let movie = {
    name: "Kill Bill",
    release: 2003,
    director: "Tarantino",
    actress: "Uma Thurman",
    description : function() {
        return this.name + " is a " + this.director + "'s movie released in " + this.release + ", starring " + this.actress + ".";
    }
};
document.getElementById("Let_movie").innerHTML = movie.description();

//testing break statement
let number_break = "";
for (let x = "0"; x < 15; x++) {
    if (x === 6) {break; }
    number_break += "The number is " + x + "<br>";
}
document.getElementById("break_test").innerHTML = number_break;

//testing continue statement
let number_continue = "";
for (let x = "0"; x < 9; x++) {
    if (x === 4) {continue; }
    number_continue += "The number is " + x + "<br>";
}
document.getElementById("continue_test").innerHTML = number_continue;