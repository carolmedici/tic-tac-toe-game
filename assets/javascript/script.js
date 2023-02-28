/*MODAL RULES*/

function openModal() {
    document.getElementById("myModal").style.display = "block";   //change the original "display none" to "block"
    }
    
    // Close the Modal
    function closeModal() {
    document.getElementById("myModal").style.display = "none";  //hide again
    }

   

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
        startSpaces1(); 

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
    }} 
    else {
            setColor('second-color');
            updatePlayerTurn2()
            startSpaces2()
    
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
        
            
        }}} 
        (function () {
            if (localStorage.getItem('theme') === 'second-color') {
                setColor('second-color');
            } else {
                setColor('original-color');
            }
         })();}
        
        



         /* WINNER */


     function thereIsAWinner(){
        var space1 = document.getElementById('space1').getAttribute("move") //it's through the attribute "move" that will be determined who is the winner
        var space2 = document.getElementById("space2").getAttribute("move")
        var space3 = document.getElementById('space3').getAttribute("move")

        var space4 = document.getElementById('space4').getAttribute("move")
        var space5 = document.getElementById('space5').getAttribute("move")
        var space6 = document.getElementById('space6').getAttribute("move")

        var space7 = document.getElementById('space7').getAttribute("move")
        var space8 = document.getElementById('space8').getAttribute("move")
        var space9 = document.getElementById('space9').getAttribute("move")

        if(winner == ""){ 

            if((space1 == player1 && space2 == player1 && space3 == player1) || (space1 == player1  && space4 == player1  && space7 ==player1) ||   (space1 == player1  && space5 == player1  && space9== player1 ) || (space2==player1 && space5==player1 && space8==player1 ) || (space3==player1 && space6==player1 && space9==player1) || (space7==player1 && space8==player1 && space9==player1 )){

        winner = player1;
        theWinner.textContent = `${winner} wins! 🎉`;
        theWinner.style.display = "block";
        gameOver == true;
        
        return;
        
        
        
            }else if((space1 == player2 && space3 == player2 && space2 == player2) || (space1 == player2  && space4 == player2  && space7 == player2) || (space1 == player2  && space5 == player2  && space9 == player2 ) || (space2==player2 && space5==player2 && space8==player2 ) || (space3==player2 && space6==player2 && space9==player2) || (space7==player2 && space8==player2 && space9==player2 )){

            winner = player2;
            theWinner.textContent = `${winner} wins! 🎉`;
            theWinner.style.display = "block";
            gameOver == true;
            return;
            
                    
            }else if (space1!="" && space2!="" && space3!="" && space4!="" && space5!="" && space6!="" && space7!="" && space8!="" && space9!=""){
            theWinner.innerHTML = `It's a tie!<br> Nobody wins 😅 `;        
            gameOver == true;
            return;
           
             }
        }
    }
     
    

//RESTART BUTTON    

    function restart(){
          location.reload();
          theWinner.style.display = "none";
         
         
    }
