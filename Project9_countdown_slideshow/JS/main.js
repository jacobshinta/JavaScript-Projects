//////////Countdown////////
function countdown() { //declare function
    var seconds = document.getElementById("seconds").value; //define variable for input
    function tick() { //declare function
        seconds = seconds - 1; //subtracts 1 second from the variable
        timer.innerHTML = seconds; //outputs remaining time
        setTimeout(tick, 1000); //1 seconds pause in between each countdown
    if(seconds == -1){ //if seconds variable is = -1
        alert("Time's up!"); //popup "Time's up"
    }
        }
        tick(); //executes function
}
//////////Countdown/////////

/////////Slideshow/////////

var slideIndex = 1; //define variable
showSlides(slideIndex); //define function and parameter

// next/previous controls
function plusSlides(n) { //declare function
  showSlides(slideIndex += n); //slideIndex= SlideIndex + n
}

// thumbnail image controls
function currentSlide(n) { //declarefunction and parameter
  showSlides(slideIndex = n); //execute showSlides function at given parameters
}

function showSlides(n) { //declare function
  var i; //declare variable
  var slides = document.getElementsByClassName("mySlides"); //declare variable at given class
  var dots = document.getElementsByClassName("dot"); //declare variable at given class
  if (n > slides.length) {slideIndex = 1} //resets to start of index if you go over the length
  if (n < 1) {slideIndex = slides.length} //goes to end of index if you go before the first slide
  for (i = 0; i < slides.length; i++) { //for loop hides previous slides
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { //for loop displays only selected dot as active
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; //gives index correct starting position
  dots[slideIndex-0].className += " active";//gives dots correct position per picture
} 

//////////End Slideshow//////////