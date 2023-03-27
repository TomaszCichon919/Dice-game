
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
function diceGame1() {
    if (randomNumber1 == 1) {
       return document.querySelector(".img1").setAttribute("src","images/dice1.png");
    }
   else if (randomNumber1 == 2) {
     return document.querySelector(".img1").setAttribute("src","images/dice2.png");
    }
    else if (randomNumber1 == 3) {
       return document.querySelector(".img1").setAttribute("src","images/dice3.png");
    }
    else if (randomNumber1 == 4) {
       return document.querySelector(".img1").setAttribute("src","images/dice4.png");
    }
    else if (randomNumber1 == 5) {
       return document.querySelector(".img1").setAttribute("src","images/dice5.png");
    }
     else if (randomNumber1 == 6) {
        return document.querySelector(".img1").setAttribute("src","images/dice6.png");
    }
    
}

function diceGame2(){
    if (randomNumber2 == 1) {
        return document.querySelector(".img2").setAttribute("src","images/dice1.png");
     }
    else if (randomNumber2 == 2) {
      return document.querySelector(".img2").setAttribute("src","images/dice2.png");
     }
     else if (randomNumber2 == 3) {
        return document.querySelector(".img2").setAttribute("src","images/dice3.png");
     }
     else if (randomNumber2 == 4) {
        return document.querySelector(".img2").setAttribute("src","images/dice4.png");
     }
     else if (randomNumber2 == 5) {
        return document.querySelector(".img2").setAttribute("src","images/dice5.png");
     }
      else if (randomNumber2 == 6) {
         return document.querySelector(".img2").setAttribute("src","images/dice6.png");
     }
}
function result(){
    if (randomNumber1>randomNumber2){
        return document.querySelector("h1").innerHTML="Player 1 wins!";
    }
    else if (randomNumber1<randomNumber2) {
        return document.querySelector("h1").innerHTML="Player 2 wins!";
    }
    else if (randomNumber1==randomNumber2) {
        return document.querySelector("h1").innerHTML="Draw!";
    }
    
}

   document.querySelector(".btn").addEventListener("click", function (){
      diceGame1();
      diceGame2();
      result();
     
   
   })
   document.addEventListener("keydown", function (){
      diceGame1();
      diceGame2();
      result();
   })

   document.querySelector(".btnreload").addEventListener("click", function (){
      window.location.reload();
   })

//function makeSound (key){
  // switch(key){
      // case "w":
         //  var tom1 = new Audio("sounds/tom-1.mp3");tom1.play();
         //  break;

