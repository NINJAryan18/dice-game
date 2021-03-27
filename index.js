// random image left

var randomNumber1 = Math.ceil(Math.random()*6);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// random image right

var randomNumber2 = Math.ceil(Math.random()*6);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if player1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player1 Wins";
}
//if player2 wins
if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins🚩";
}
// if it's a draw
if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}