const spaces = document.querySelectorAll('.space');
const playTxt = document.querySelector("#play");
const btnRestart = document.querySelector("#restart")
let x = "<img src=assets/images/x.png>"
let o = "<img src=assets/images/ogreen.png>"

const win=[
    [0,1,2],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]

];

let options = ["","","","","","","","",""]
let currentPlayer = x
let player ="X"
let running = false
init();

function init() {
    spaces.forEach(space=>space.addEventListener('click, spaceClick'));
    btnRestart.addEventListener ('click', restartGame)
}