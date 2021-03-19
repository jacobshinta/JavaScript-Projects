let activePlayer = 'X'; //whose turn it is
let selectedSquares = []; //stores moves in this array for determining a win
function placeXOrO(squareNumber) { //define function for placing the x's and o's
    if (!selectedSquares.some(element => element.includes(squareNumber))) { //checks if the square has been selected
        let select = document.getElementById(squareNumber); //set variable equal to the selected html element
        if (activePlayer === 'X') {  //check whose turn it is
            select.style.backgroundImage = 'url("images/x.png")'; //display an X if its the players turn
        } else {
            select.style.backgroundImage = 'url("images/o.png")'; //display an O if not
        }
        selectedSquares.push(squareNumber + activePlayer); //adds variables to array
        checkWinConditions(); //call function
        if (activePlayer === 'X') { //changing the turn
            activePlayer = 'O'; //makes the player O if it is already X
        } else {
            activePlayer = 'X';
        }
        audio('./media/place.mp3'); //plays the place noise
        if(activePlayer === 'O'){ //checks if its the computers turn
            disableClick(); //function for disabling clicking for computers turn
            setTimeout(function (){ computersTurn(); }, 1000) //waits 1 seconds to make a move and reenables click
        }
        return true;
    }
    function computersTurn() { //function for randomly selecting a square on the computers turn
        let success = false; //needed for while loop
        let pickASquare; //set variable
        while(!success){ //if a square is already selected it will keep going through this loop until a new one is chosen
            pickASquare = String(Math.floor(Math.random() * 9)); //a random number between 0-8 is chosen
            if (placeXOrO(pickASquare)) { 
                placeXOrO(pickASquare); //calls function
                success = true; //change the boolean and end the loop
            };
        }
    }
}

function checkWinConditions() { //function searches array for win conditions, the drawline function will be called if any condition is met
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >= 9) { //if none of the above conditions are met and all squares are full it will result in a tie
        audio('./media/tie.mp3'); //plays the tie noise
        setTimeout(function () { resetGame(); }, 1000); //delay before the game resets
    }
    function arrayIncludes(squareA, squareB, squareC) { //define function to check for each win condition
        const a = selectedSquares.includes(squareA) //define variables
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        if (a === true && b === true && c === true) { return true } //checks if all 3 variables are true
    }
}

function disableClick() { //define function
    body.style.pointerEvents = "none"; //makes body unclickable
    setTimeout(function() {body.style.pointerEvents = 'auto'}, 1000) //1 second delay
}

function audio(audioURL) { //define function
    let audio = new Audio(audioURL); //new audio object and set path as parameter
    audio.play(); //play methos plays audio sound
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //define function to draw win lines
    const canvas = document.getElementById('win-lines') //points to html canvas element
    const c = canvas.getContext('2d'); //gives access to methods and properties to use on canvas
    let x1 = coordX1,  //indicates different coordinates for starting and endpoints
        y1 = coordY1, 
        x2 = coordX2, 
        y2 = coordY2, 
        x = x1, //these two are for the line animation loop
        y = y1;

    function animateLineDrawing() { //define function
        const animationLoop = requestAnimationFrame(animateLineDrawing); //define variable
        c.clearRect(0, 0, 608, 608) //clears the content from previous loop
        c.beginPath(); //new path
        c.moveTo(x1, y1) //starting point for line
        c.lineTo(x, y) //end point for line
        c.lineWidth = 10; //thickness of line
        c.strokeStyle = 'rgba(70, 255, 33, .8)'; //color
        c.stroke(); //actually draws the line
        if (x1 <= x2 && y1 <= y2) { //checks if we have reached the endpoint
            if (x < x2) { x += 10; } //adds 10 to the previous endpoint
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } //ends loop if at the endpoint
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); } 
        }
    }
    function clear() { //clears canvas after line is drawn
        const animationLoop = requestAnimationFrame(clear); //starts loop
        c.clearRect(0, 0, 608, 608); //clears canvas
        cancelAnimationFrame(animationLoop); //ends loop
    }
    disableClick(); 
    audio('./media/winGame.mp3');//plays win sound
    animateLineDrawing(); //calls loop
    setTimeout(function () { clear(); resetGame(); }, 1000); //1 second delay before clearing canvas and reseetting game
}

function resetGame() { //define function for resetting game
    for (let i = 0; i < 9; i++) { //loop itterates the each defined element
        let square = document.getElementById(String(i)) //gets the html element of i
        square.style.backgroundImage = '' //removes the x's and o's
    }
    selectedSquares = []; //sets array back to empty
}
