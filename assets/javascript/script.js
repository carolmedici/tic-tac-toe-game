/*MODAL RULES*/

function rulesOnClick(){
    document.getElementById("rules-bar").classList.toggle("change");  //classList.toggle insert class if it doesn't exist or remove it if it exists
    document.getElementById("nav").classList.toggle("change");
  
}


const player1 = "Player 1";
const player2 = "Player 2";
var playTime = player1;  //player 1 it's always the first player
var gameOver = false; 
var winner = "";
var res1p = 0
var resTie = 0
var res2p = 0
var res1 = document.getElementById('res1')
var resT = document.getElementById('resT')
var res2 = document.getElementById('res2')

function setColor(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
changeTheme() 

function changeTheme() {
   if (localStorage.getItem('theme') === 'second-color'){
       setColor('original-color');
        updatePlayerTurn(); //call the function
        startSpaces();

    function updatePlayerTurn(){
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
    function startSpaces(){
    let spaces = document.getElementsByClassName("space");
    for (let i = 0; i < spaces.length; i++){

    spaces[i].addEventListener("click", function(){
        if (gameOver == true){
            return;
        } // if the game it's over, nothing else will be done

        if (this.getElementsByTagName("img").length ==0 ){ //if this space is empty, put an image inside. if it's full, nothing happens
            if (playTime == player1){
                this.innerHTML = "<img src='/assets/images/x.png'>";
                this.setAttribute("move", player1); 
                playTime = player2;

            }else{
                this.innerHTML = "<img src='/assets/images/o.png'>";
                this.setAttribute("move", player2);
                playTime = player1;
            }}
            updatePlayerTurn(); //update players turn image
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
     })();
        }
    

    async function thereIsAWinner(){
        var space1 = document.getElementById('space1').getAttribute("move") //it's through the attribute "move" that will be determined who is the winner
        var space2 = document.getElementById("space2").getAttribute("move")
        var space3 = document.getElementById('space3').getAttribute("move")

        var space4 = document.getElementById('space4').getAttribute("move")
        var space5 = document.getElementById('space5').getAttribute("move")
        var space6 = document.getElementById('space6').getAttribute("move")

        var space7 = document.getElementById('space7').getAttribute("move")
        var space8 = document.getElementById('space8').getAttribute("move")
        var space9 = document.getElementById('space9').getAttribute("move")

        if(winner == ""){ //is empty because we don't have a winner yet

        if((space1 == space2 && space1 == space3 && space1 != "") || (space1 == space4 && space1 == space7 && space1!="") || (space1 == space5 && space1 == space9 && space1 != "")){

        winner = space1

        }else if((space5 == space4 && space5 == space6 && space5 != "") || (space5 == space2 && space5 == space8 && space5 != "") || (space5 == space3 && space5 == space7 && space5 != "")){

        winner = space5

        }else if((space9 == space8 && space9 == space7 && space9 != "") || (space9 == space6 && space9 == space3 && space9 != "")){

    winner = space9
        }else if (space1!="" && space2!="" && space3!="" && space4!="" && space5!="" && space6!="" && space7!="" && space8!="" && space9!=""){
           
            
            
            gameOver == true;
            return;
        }
    }


if (winner == player1){
gameOver == true;
res1.innerHTML = (res1p + 1)

}
else if (winner == player2){
    gameOver == true;
    res2.innerHTML = (res2p + 1)
    
    }else{
        resT.innerHTML = (resTie + 1)
    }
}
 

    
    






 
/*COLOR THEME

function setColor(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeTheme() {
   if (localStorage.getItem('theme') === 'second-color'){
       setColor('original-color');
       

   } else {
       setColor('second-color');
   }
} 

(function () {
   if (localStorage.getItem('theme') === 'second-color') {
       setColor('second-color');
       
      
   } else {
       setColor('original-color');
   }
}



)()*/

function restart(){
   /* window.location.reload();*/
   space1.innerHTML = '';
   space2.innerHTML = '';
   space3.innerHTML = '';
   space4.innerHTML = '';
   space5.innerHTML = '';
   space6.innerHTML = '';
   space7.innerHTML = '';
   space8.innerHTML = '';
   space9.innerHTML = '';


    
   
    }
