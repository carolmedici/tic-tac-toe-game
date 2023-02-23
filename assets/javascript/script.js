const player1 = "X";
const player2 = "O";
var playTime = player2; 
const gameOver = false; 

updatePlayerTurn()

function updatePlayerTurn(){
    if (gameOver) {return;} 

    if (playTime == player1) { 

        var player = document.querySelectorAll("div#playerturn img")[0];
        player.setAttribute("src", "/assets/images/x.png") 
    } else{
        var player = document.querySelectorAll("div#playerturn img")[0];
        player.setAttribute('src', '/assets/images/o.png')
    } 
}



//player 1 it's always the first player
// if the game it's over, nothing else will be done
//call the function
// if the game over, return and don't do anything
//if it's player 1 turn's, var player will search the image of #playerturn  and setAttribute will change "src" to "x image"
