var randomNumber1 = Math.floor((Math.random() * 6) + 1);
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

function result(){
    if (randomNumber1<4){
        return document.querySelector("h1").innerHTML="Nie postarałeś się";
    }
    else if (randomNumber1>3 && randomNumber1<6) {
        return document.querySelector("h1").innerHTML="No nieźle";
    }
    else if (randomNumber1== 6) {
        return document.querySelector("h1").innerHTML="No i jest Szósteczka!!";
    }
}
    function sound(){
        if (randomNumber1 == 1) {
            var tom2 = new Audio("sounds/loss.mp3");tom2.play();}

    
    else if (randomNumber1 == 6) {
        var tom1 = new Audio("sounds/win.mp3");tom1.play();}
        else {
            console.log(randomNumber1);
        }

}

document.querySelector(".btn").addEventListener("click", function (){
    diceGame1();
    result();
    sound();
   
 
 })
 document.addEventListener("keydown", function (){
    diceGame1();
    result();
    sound();
 })

 

 document.querySelector(".btnreload").addEventListener("click", function (){
    window.location.reload();
 })
