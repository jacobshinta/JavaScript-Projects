var x = 5 //declare variable
function myFunction() { //declare function
    var x = 6; //declare variable
    console.log(10 + x); //display expression in console
}
function myFunction2() { //declare function
    console.log(x + 50); //display expression in console
}
myFunction(); //execute functions
myFunction2();

function get_Date() { //declare function
    if (new Date().getHours() < 18) { //checks if time is less than 1800
    document.getElementById("Greeting").innerHTML = "How are you today?"; //will display string if true
    }
}

function Age_Function() { //declare function
    Age = document.getElementById("Age").value; //giving variable to input
    if (Age >= 18) { //if you are older than 18
        Vote = "You are old enough to vote!"; //display string if true
    }
    else {
        Vote = "You are not old enough to vote!"; //display string if false
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; //displays variable "vote" at that ID
}

function Time_function() { //declare function
    var Time = new Date().getHours(); //pull time
    var Reply; //set variable
    if (Time < 12 == Time > 0) { //if it is between 0000 and 1200
        Reply = "It is morning!"; //display this string
    }
    else if (Time >=12 == Time < 18) { //if it is between 1200 and 1800
        Reply = "It is afternoon!" //display this string
    }
    else {
        Reply = "It is evening time."; //display this string if any other time
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //display variable "Reply" at specified IF
}