var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw!"
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!"
} else {
    document.querySelector("h1").textContent = "Player 1 Wins!"
}

//Angela's Solution variations

//var randmomDiceImage = "dice" + randomNumber1 + ".png";

//var randomImageSource = "images/" + randmomDiceImage;

//var image1 = document.querySelectorAll("img")[0];
//image1.setAttribute("src", randomImageSource);


//querySelectorAll creates an array of the two images.