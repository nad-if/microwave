//  Great job with the Microwave everyone!
//  It looks great!  All the buttons are there and working.
//  Your code below is well organized and commented. The only
//  thing I noticed was that if I pressed 'Start' in the middle
//  of a countdown, I could start multiple timers going and actually
//  get the countdown going quite fast.  It might have been good to
//  disable the start button once it was clicked.  Otherwise, nice
//  work!


// Microwave Functions Guide

// Define an array holder for the timer
var numArray = [0, 0, 0, 0];

var num;

var timer;

// Define a variable inputTXT to hold the input area
var inputTxt = document.getElementById("display"); 

// When pressing a number button, the first element in numArray get poped out and the entered number is being pushed to the numArray. 
function displayNumber(num){
    numArray.shift();
    numArray.push(num);
// Display the current array element    
    inputTxt.value = numArray;

// Assign array elements to 4 digits
    minTen = numArray[0];
    minUni = numArray[1];
    secTen = numArray[2];
    secUni = numArray[3];
    document.getElementById('startBtn').disabled = false;
}


function startTimer(){

// Define input values and increments (by second);
    document.getElementById('display').value = (minTen) + "" + (minUni) + ":" + (secTen) + "" + (secUni--);
// Indicate the start of function: change by color;    
    document.getElementById('display').style.backgroundColor = "coral";
    document.getElementById('startBtn').disabled = false;

// Four digits on the timer are operating individually.  If statements catches all the possible cases of a countdown timer
// and reset values accordingly. 
    if (secTen > 0 && secUni < 0){
        secTen --;
        secUni = 9;
        timer = setTimeout('startTimer()', 1000);
    } 
    else if (secTen == 0 && secUni < 0) {
        if (minUni > 0){
            minUni--;
            secTen = 5;
            secUni = 9;
            timer = setTimeout('startTimer()', 1000);
        }
        else if (minUni == 0 && minTen > 0){
            minTen--;
            minUni = 9;
            secTen = 5;
            secUni = 9;
            timer = setTimeout('startTimer()', 1000);
        }
        else if (minUni == 0 && minTen == 0){
            doneTimer();
        } 
    } 
    else {
        timer = setTimeout('startTimer()', 1000);
    }
}

// doneTimer() function is being called when timer is down to 0, rather than manually stoped or reset to zero.  
function doneTimer(){
    clearTimeout(timer);
    document.getElementById('display').value = "DONE!";
// jQuery function add blink class, class is added only when doneTimer is called.  Fade-in and fade-out - blink
    $('#display').addClass('blink');
    $('.blink').each(function() {
        var temp = $(this);
        temp.fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
    });

    document.getElementById('display').style.backgroundColor = 'beige';
    
}

function stopTimer(){

// Timer is paused
    clearTimeout(timer);
    document.getElementById('display').style.backgroundColor = "plum";
    document.getElementById('stopBtn').disabled = false;

}

function clearTimer() {

// Timer is being reseted to zero.  Start button will work again when new timer(number) is entered. 
    numArray = [0, 0, 0, 0];
    document.getElementById('display').value = "00:00";
    document.getElementById('display').style.backgroundColor = "khaki";
    minTen = numArray[0];
    minUni = numArray[1];
    secTen = numArray[2];
    secUni = numArray[3];
    document.getElementById('startBtn').disabled = true;
}