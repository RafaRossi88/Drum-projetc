var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "K":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;

    case "A":
      var tom2 = new Audio("sounds/rightCrash.mp3");
      tom2.play();
      break;

    case "S":
      var tom3 = new Audio('sounds/tom3.mp3');
      tom3.play();
      break;

    case "D":
      var tom4 = new Audio('sounds/snare.mp3');
      tom4.play();
      break;

    case "J":
      var snare = new Audio('sounds/tom2.mp3');
      snare.play();
      break;

    case "L":
      var crash = new Audio('sounds/leftcrash.mp3');
      crash.play();
      break;

    case "G":
      var kick = new Audio('sounds/kickbass.mp3');
      kick.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}