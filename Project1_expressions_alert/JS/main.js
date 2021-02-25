var A = "Example" , B = "Example2"; //Declaring variables
var A = A.fontcolor("red"); //Making the variable "A" font Red

window.alert("Hello!"); //Displaying the string in window.alert

document.write(A + B); //concatenate variables A and B
document.write("<br>"); //line break
document.write(5+5); //Writing an example expression
document.write("<br>"); //Line break

function My_First_Function() { //Defining a function
    var str = "This text is green!"; // Defining variable and giving it a string value
    var result = str.fontcolor("green"); //Using fontcolor method on the variable
    document.getElementById("Green_Text").innerHTML = result; //assigning the value of the result to the html element "Green_Text"
}