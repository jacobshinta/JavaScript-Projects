function Call_Loop() { //define function
    var res = ""; //define variables
    var x = 1;
    while (x < 11) { //as long as variable x is less than 11
        res += "<br>" + x; //add x and a line break to our "res" variable
        x++; //increment x by 1
    }
    document.getElementById('Loop').innerHTML = res; //set "res" equal to the html element "loop"
}

var instruments = ["Guitar", "Drums", "Piano", "Violin"]; //create array
var content = ""; //set variables
var y;
function for_Loop() { //define function
    for (y = 0; y < instruments.length; y++) { //sey y=0, as long as y is less than length of the array, increment y by 1
        content += instruments[y] + "<br>"; //content is += to the index value from the previous line plus a line break
    }
    document.getElementById("list_Instruments").innerHTML = content; //set variable equal to the specified element
}

function array_Function() { //define function
    var cat_pic = []; //define array and variables within it
    cat_pic[0] = "sleeping";
    cat_pic[1] = "playing";
    cat_pic[2] = "eating";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + cat_pic[1] + ".";// set the string plus "cat_pic[1]" equal to the specified element
}

function constant_Function() { //define function
    const car = {make:"Honda", model:"Accord", year:"2020"}; //create array for constant "car"
        car.year = "1998"; //change value of car.year
        car.color = "Blue"; //add this property and value
    document.getElementById("Constant").innerHTML = "The year of the " + car.color + " " //make this string and values equal to the specified element
        + car.make + " " + car.model + " is " + car.year + ".";
}

var t = 10; 
console.log(t);
{
    let t = 5; //testing "let"
    console.log(t);
}
console.log(t);

let car = {  //create object
    make: "Ford ", //add properties
    model: "Mustang ",
    year: "2021 ",
    color: "red ",
    description : function() { //add method to this object
        return "The car is a " + this.year + this.color + this.make + this.model; //will return the string plus the specified properites of the object
    }
};
document.getElementById("car_object").innerHTML = car.description(); //calls function at specified element