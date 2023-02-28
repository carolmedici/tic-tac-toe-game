/*  THE GAME */

const player1 = "Player 1"; //assign values ​​to players 1 and 2
const player2 = "Player 2";

var playTime = player1;  //player 1 it's always the first player
var gameOver = false; 
var winner = ""; //is empty because we don't have a winner yet
  
const theWinner = document.getElementById('result') // assign value to the result, indicating who won the game




/*THEME COLOR */
function setColor(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

changeTheme() 
function changeTheme() {
    
   if (localStorage.getItem('theme') === 'second-color'){
       setColor('original-color');
      
        updatePlayerTurn1(); //call the function
       

} 
    else {
            setColor('second-color');
            updatePlayerTurn2()
            startSpaces2()
    
            } 
        (function () {
            if (localStorage.getItem('theme') === 'second-color') {
                setColor('second-color');
            } else {
                setColor('original-color');
            }
         })();}

        
    
    /*PLAYER ONE */
    
    function updatePlayerTurn1(){
            if (gameOver == true){
                return;
            }  // if the game it's over, nothing else will be done
        
            if (playTime == player1) { 
        
                var player = document.querySelectorAll("div#playerturn img")[0];
                player.setAttribute("src", "/assets/images/x.png") //if it's player 1 turn's, var player will search the image of #playerturn  and setAttribute will change "src" to "x image"
            } else{
                var player = document.querySelectorAll("div#playerturn img")[0];
                player.setAttribute('src', '/assets/images/o.png')
            } 
            startSpaces1(); 
        }
        
        
        function startSpaces1(){
            let spaces = document.getElementsByClassName("space");
            for (let i = 0; i < spaces.length; i++){
        
            spaces[i].addEventListener("click", function(){
                if (gameOver == true){
                    return;
                } // if the game it's over, nothing else will be done
        
                else if (this.getElementsByTagName("img").length ==0 ){ //if this space is empty, put an image inside. if it's full, nothing happens
                    if (playTime == player1){
                        this.innerHTML = "<img src='/assets/images/x.png'>";
                        this.setAttribute("move", player1); 
                        playTime = player2;
        
                    }else{
                        this.innerHTML = "<img src='/assets/images/o.png'>";
                        this.setAttribute("move", player2);
                        playTime = player1;
                    }}
                    updatePlayerTurn1(); //update players turn image
                    thereIsAWinner(); //verify if there is a winner
                } );
             }
            }



        /*PLAYER TWO */   

        function updatePlayerTurn2(){
                if (gameOver == true){
                    return;
                }  // if the game it's over, nothing else will be done
            
                if (playTime == player1) { 
            
                    var player = document.querySelectorAll("div#playerturn img")[0];
                    player.setAttribute("src", "/assets/images/dog.png") //if it's player 1 turn's, var player will search the image of #playerturn  and setAttribute will change "src" to "x image"
                } else{
                    var player = document.querySelectorAll("div#playerturn img")[0];
                    player.setAttribute('src', '/assets/images/cat.png')
                } 
            }
            function startSpaces2(){
                let spaces = document.getElementsByClassName("space");
                for (let i = 0; i < spaces.length; i++){
            
                spaces[i].addEventListener("click", function(){
                    if (gameOver == true){
                        return;
                    } // if the game it's over, nothing else will be done
            
                    if (this.getElementsByTagName("img").length ==0 ){ //if this space is empty, put an image inside. if it's full, nothing happens
                        if (playTime == player1){
                            this.innerHTML = "<img src='/assets/images/dog.png'>";
                            this.setAttribute("move", player1); 
                            playTime = player2;
            
                        }else{
                            this.innerHTML = "<img src='/assets/images/cat.png'>";
                            this.setAttribute("move", player2);
                            playTime = player1;
                        }}
                        updatePlayerTurn2(); //update players turn image
                        thereIsAWinner(); //verify if there is a winner
        
        
                    })
        
            
        }}
