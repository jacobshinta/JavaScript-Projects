function full_Sentence() { //declare function
    var part_1 = "I have made "; //declare variables
    var part_2 = "this into a ";
    var part_3 = "complete sentence.";
    var whole_sentence = part_1.concat(part_2, part_3); //concatenate teh variable using concat method and declare result variable
    document.getElementById("concatenate").innerHTML = whole_sentence; //display "whole_sentence" at specified ID
}

function slice_Method() { //declare function
    var Sentence = "All work and no play makes Johnny a dull boy."; //apply variable to the string
    var Section = Sentence.slice(27,33); //slice mthod at specified positions
    document.getElementById("Slice").innerHTML = Section; //display "Section" at specified ID
}

function string_Method() { //declare function
    var x = 182; //declare variable for the value
    document.getElementById("Numbers_to_string").innerHTML = x.toString(); //use toString method to display number as a string at the specified ID
}

function precision_Method() { //declare function
    var x = 15646.561656351; //declare variable for the value
    document.getElementById("Precision").innerHTML = x.toPrecision(10); //use toPrecision method to round to the 10th position and display "x" at specified ID
}
