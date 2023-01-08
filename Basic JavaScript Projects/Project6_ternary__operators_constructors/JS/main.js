function Vote_Function() { //creating a Constructor function
    var Age, Can_vote; //defining variable
    Age = document.getElementById("Age").value; // defining id to match the string 
    Can_vote = (Age > 17) ? "You can vote!":"You are not old enough to vote."; // Boolean Logic
    document.getElementById("Vote").innerHTML = Can_vote; // defining id to match the string 
}


function Vehicle (Make, Model, Year, Color) { //creating function
    this.Vehicle_Make = Make; //defining variable and testing "this" keywords
    this.Vehicle_Model = Model; //defining variable and testing "this" keywords
    this.Vehicle_Year = Year; //defining variable and testing "this" keywords
    this.Vehicle_Color = Color; //defining variable and testing "this" keywords
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red"); //defining variable and testing "new" keywords
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black"); //defining variable and testing "new" keywords
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard"); //defining variable and testing "new" keywords

function myFunction() { //creating function
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactered in " + Erik.Vehicle_Year; // defining id to match the string 
}

function Comics (Publisher, Hero, City) { //creating function
    this.Comics_Publisher = Publisher; //defining variable and testing "this" keywords
    this.Comics_Hero = Hero; //defining variable and testing "this" keywords
    this.Comics_City = City; //defining variable and testing "this" keywords
}
var SpiderMan = new Comics ("Marvel", "Peter Parker", "New York"); //defining variable and testing "new" keywords
var Batman = new Comics ("DC", "Bruce Wayne", "Gotham"); //defining variable and testing "new" keywords

function HeroFunction() { //creating function
    document.getElementById("New_and_This").innerHTML = "Spiderman is a super hero published by " + SpiderMan.Comics_Publisher + ". Your real name is " + SpiderMan.Comics_Hero + " and he lives in " + SpiderMan.Comics_City; // defining id to match the string 
}

function count_Function() { //creating function
    document.getElementById("Nested_Function").innerHTML = Count (); // defining id to match the string 
    function Count() { //creating Nested subfunction
        var Starting_point = 9; //defining variable
        function Plus_one() {Starting_point += 1;} //creating subfunction2
        Plus_one(); //activate the function
        return Starting_point; //result of function
    }
}