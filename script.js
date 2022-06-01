//  F O R   D I C E  1-------------------------

var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1 - 6

var randomDiceImage1 = "dice" + randomNumber1 + ".png";//dice1.png - dice6.png

var randomImageSource1 = "./images/" + randomDiceImage1;//./images/dice(1-6).png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

//  F O R   D I C E  2--------------------------

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "./images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


//If-Else-----------------------------------------
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Drawww!";
} else {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
