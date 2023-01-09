function assemble() { //creating function
    var part1 = "The originals Avengers from MCU are: "; //setting variable
    var part2 = "Captain America, "; //setting variable
    var part3 = "Iron Man, "; //setting variable
    var part4 = "Thor "; //setting variable
    var part5 = "and Hulk."; //setting variable
    var fullsentence = part1.concat(part2, part3, part4, part5); //testing concatenate method
    document.getElementById("Concatenate").innerHTML = fullsentence; // defining id to match the string 
}

function slice_method() { //creating function
    var Sentece = "The 2022 Game of the year was Elden Ring!" //setting variable
    var Section = Sentece.slice(9,13); //testing slice method
    var Upper = Section.toUpperCase(); //testing toUpperCase method 
    document.getElementById("Slice").innerHTML = Upper; // defining id to match the string 
}

function search_method() { //creating function
    var sentece = "The 2022 Game of the year was Elden Ring!" //setting variable
    var Search1 = sentece.search("Elden Ring"); //testing search method 
    document.getElementById("Search").innerHTML = Search1; // defining id to match the string 
}

function string_method() { //creating function
    var x = 99; //setting variable
    document.getElementById("numbers_string").innerHTML = x.toString(); // testing toString method and defining id to match the string 
}

function precision_method() { //creating function
    var x = 3.14159265359; //setting variable
    document.getElementById("Precision").innerHTML = x.toPrecision(5); // testing precision method and defining id to match the string
}

function fixed_method() { //creating function
    var x = 3.14159265359; //setting variable
    var fix = x.toFixed(2) // testing fixed method
    document.getElementById("Fixed").innerHTML = fix; // defining id to match the string 
}

function valuestring_method() { //creating function
    var text = "Here we go again!"; //setting variable
    var result = text.valueOf(); //testing valueOf method
    document.getElementById("ValueString").innerHTML = result; // defining id to match the string 
}

