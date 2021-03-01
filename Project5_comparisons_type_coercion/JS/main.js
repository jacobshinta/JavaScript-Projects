document.write(typeof 5); //checking datatype of 5

document.write("<br>"); //line break

document.write(5 < 4); //checking if the number 5 is less than 4

document.write("<br>"); //line break

document.write(5 > 4); //checking if number 5 is greater than 4

document.write("<br>"); //line break

document.write("50" + 10); //added the number value 10 to the end of the string "50"

document.write("<br>"); //line break

document.write(100 == 10); //checking if 100 is equal to 10

document.write("<br>"); //line break

document.write(100 == 100); //checking if 100 is equal to 100

document.write("<br>"); //line break

var A = 10, B = 30, C = 10, D = "30"; //declaring variable to check if they are equal in data type and value in the following examples

document.write(A === C);

document.write("<br>"); //line break

document.write(A === D);

document.write("<br>"); //line break

document.write(B === D);

document.write("<br>"); //line break

document.write(B === C);

document.write("<br>"); //line break
 
document.write(5 > 4 && 6 > 4); //checking if both expressions are true

document.write("<br>"); //line break

document.write(5 < 4 && 6 > 4); //checking if both expressions are true

document.write("<br>"); //line break

document.write(5 < 4 || 6 > 4); //checking if either expression is true

document.write("<br>"); //line break

document.write(5 == 4 || 6 == 4); //checking if either expression is true

document.write("<br>"); //line break

document.write(!(10 > 5)); //checking if the expression is NOT true

document.write("<br>"); //line break

document.write(!(10 < 5)); //checking if the expression is NOT true

document.write("<br>"); //line break

console.log(5 + 5); //doing the expression in the console

function infinityFunction() {  //define function
    document.getElementById("infinity").innerHTML = 2E310; //display infinity by attempting to display too large a number for javascript to handle
}

function negInfinityFunction() { //define function
    document.getElementById("negInfinity").innerHTML = -2E310; //display -infinity by attempting to display too large a number for javascript to handle
}