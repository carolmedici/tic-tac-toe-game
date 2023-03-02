# Tic Tac Toe Game

This is a version of the tic-tac-toe game designed and developed by me.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Play the game with another opponent
- See who was the winner or if there was a tie through the result marker
- Change game theme
- Restart the game

### Screenshot

![](https://github.com/carolmedici/tic-tac-toe-game/blob/main/assets/images/print-mobile.jpg)
![](https://github.com/carolmedici/tic-tac-toe-game/blob/main/assets/images/rules-desktop.jpg)
![](https://github.com/carolmedici/tic-tac-toe-game/blob/main/assets/images/print-desktop-2.jpg)


### Links

- Solution URL: [https://github.com/carolmedici/tic-tac-toe-game](https://github.com/carolmedici/tic-tac-toe-game)
- Live Site URL: [https://carolmedici.github.io/tic-tac-toe-game/](https://carolmedici.github.io/tic-tac-toe-game)

## My process

### Built with

- CSS custom properties
- CSS Grid
- Mobile-first workflow
- Modal components
- Functions to return an element from the DOM
- JavaScript nested IF/ELSE statements


### What I learned

In this project I learned how to add images through javascript, how to make the functions I needed to return certain elements from the DOM, how to call functions within functions.
I kept practicing the functions I already used like changing the page theme, the modal function.

Check out some code: 

```html
<h2>Rules</h2><p id="rule-modal" onclick="openModal()"> ?</p>
        </div>

        <div id="myModal" class="modal">
            <div class="close" onclick="closeModal()">&times;</div>
             <div class="modal-content">
           
```
```css
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 11px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.767);
  }
  
  /*MODAL CONTENT */
  .modal-content {
    position: relative;
    top: -10rem;
    left: 5rem;
   }

h2{
    font-size: 2rem;
    padding-bottom: 1.5rem;
    padding-left: 2rem;
    color: white;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.455);
    font-family: var(--font-text);

}

#rule-modal{
width: 0.6rem;
height: 0.6rem;
padding: 0rem 1.2rem 2rem 0.8rem;
border-radius: 50rem;
border-color: white;
border-style:solid;
border-width:3px;
position: relative;
top: -4rem;
left: 10rem;
font-size: 2rem;
font-weight: 600;
}
```
```js
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
```


### Continued development

I will continue studying JavaScript and I will start learning API

### Useful resources

- [W3Schools](https://www.w3schools.com/js/default.asp) - W3Schools always helps me with its extensive content in information, examples.


## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)




