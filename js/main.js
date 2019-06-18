/*
Created by George Michael on 05/07/1998
*/

var btn = document.getElementById("babyBuster");

function buttonClicked() {
  console.log("Button clicked");
  var customText = document.getElementsByClassName("boySearch");
  var results = document.getElementById('sBFA');

  results.innerHTML = "I can't find " + customText[0].value;
}


btn.addEventListener("click", buttonClicked);
