var decreaseBtn = document.getElementById("btn-decrease");
var resetBtn = document.getElementById("btn-reset");
var increaseBtn = document.getElementById("btn-increase");

var numberDiv = document.getElementById("number");

//increase functons
function increase(){
    numberDiv.innerHtml = Number(number.innerHTML) +1;
}

//decrease functions
function decrease(){
    numberDiv.innerHTML = Number(number.innerHTML) -1;
}

//reset functions
function reset(){
    numberDiv.innerHTML = 0;
}

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);