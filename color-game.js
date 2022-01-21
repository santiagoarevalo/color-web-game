let squares = document.querySelectorAll(".square");
let displayColor = document.getElementById("displayColor");
let numSquares = 6;

var colors = [];
colors = getColors(6);

let indexColor = Math.floor(Math.random()*colors.length);
var pickedColor = colors[indexColor];
displayColor.textContent = pickedColor;

let h1 = document.querySelector("h1");
let message = document.getElementById("message");
let resetBtn = document.querySelector("#reset");
let modes = document.querySelectorAll(".mode");

resetBtn.addEventListener("click", reset);
setupButtons()
setupSquares();
reset();

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor == pickedColor) {
                changeColors(clickedColor);
                message.textContent = "Correcto"
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Intenta de nuevo"
            }
        })
    } 
}

function setupButtons() {
    for (let i = 0; i < modes.length; i++) {
        modes[i].addEventListener("click", 
        function() {
            modes[0].classList.remove("selected");
            modes[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent == "NOVATO"? 
            numSquares = 3: numSquares = 6;
            reset();
        })
    }
}

function reset() {
    colors = getColors(numSquares);
    let indexColor = Math.floor(Math.random()*colors.length);
    pickedColor = colors[indexColor];
    displayColor.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
}

function changeColors(color) {
    h1.style.backgroundColor = color;
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function colorRandom() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}

function getColors(num) {
    var array = [];
    for (let i = 0; i < num; i++) {
        array.push(colorRandom());
    }

    return array;
}


