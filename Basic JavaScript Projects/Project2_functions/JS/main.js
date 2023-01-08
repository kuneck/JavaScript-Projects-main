//setting functions and call
function Thor(){
    document.getElementById("text").innerHTML = "Thor"
    }

function Spiderman(){
    document.getElementById("text").innerHTML = "Spider-Man"
    }

function Namor(){
    document.getElementById("text").innerHTML = "Namor"
    }

function Flash(){
    document.getElementById("text").innerHTML = "Flash"
    }

    var A = "Thor, ";
    var B = "Spider-Man, "  
    var C = "Namor and "
    var D = "Flash."

function answer(){
    document.getElementById("text2").innerHTML = A+B+C+D
    }

//setting functions, call and operator
function thanksFunction() {
    var thanks = "Hope you had enjoy";
    thanks += " this minigame!";
    document.getElementById("concatenate").innerHTML = thanks
}