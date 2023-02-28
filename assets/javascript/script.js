/*MODAL RULES*/

function openModal() {
    document.getElementById("myModal").style.display = "block";   //change the original "display none" to "block"
    }
    
    // Close the Modal
    function closeModal() {
    document.getElementById("myModal").style.display = "none";  //hide again
    }

   




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
