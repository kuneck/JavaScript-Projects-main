function my_dictionary() {
    var asap = {
        Meaning: "As soon as possible"
    };
    document.getElementById("Dictionary").innerHTML = asap.Meaning;
}

function my_dictionary2() {
    var omw = {
        Meaning: "On my way"
    };
    document.getElementById("Dictionary2").innerHTML = omw.Meaning;
}

function my_dictionary3() {
    var brb = {
        Meaning: "Be right back",
        Aka: "Away from keyboard"
    };
    delete brb.Meaning
    document.getElementById("Dictionary3").innerHTML = brb.Meaning;
}

function my_dictionary4() {
    var lol = {
        Meaning: "Laugh out loud"
    };
    document.getElementById("Dictionary4").innerHTML = lol.Meaning;
}

function my_dictionary5() {
    var ty = {
        Meaning: "Thank you"
    };
    document.getElementById("Dictionary5").innerHTML = ty.Meaning;
}