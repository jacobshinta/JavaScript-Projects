function full_Sentence() {
    var part_1 = "I have made ";
    var part_2 = "this into a ";
    var part_3 = "complete sentence.";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function toUpper_Method() {
    var string = "Uppercase now!";
    var result = string.toUpperCase();
    document.getElementById("Upper").innerHTML = result;
  }

function search_Method() {
    var string = "Search String."; 
    var n = string.search("String");
    document.getElementById("search").innerHTML = n;
  }

function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var x = 15646.561656351;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function toFixed_Method() {
    var number = 5.56789;
    var x = number.toFixed(2);
    document.getElementById("fixed").innerHTML = x;
}

function valueOf_Method() {
    var string = "Value.";
    var result = string.valueOf();
    document.getElementById("valueOf").innerHTML = result;
  }