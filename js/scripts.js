//business Logic
function Player(scoreTotal, roundTotal){
  this.scoreTotal = 0;
  this.roundTotal =0;
}

function playerOne();

  




















/*Business Logic for player
function Player(name, scoreTotal, roundTotal, isActive, diceRoll) {
  this.name = name;
  this.scoreTotal = 0;
  this.roundTotal = 0;
  this.isActive = isActive;
  this.diceRoll = 0;
}

Player.prototype.Roll = function () {
  let randomRoll = Math.floor((Math.random() * 6) + 1); //random between 0-6
  this.diceRoll = randomRoll;
  if (randomRoll === 1) {
    this.roundTotal = 0;
    this.diceRoll = 1;
    alert("you rolled 1");
    console.log("you rolled 1")
  } else {
    alert("you didn't roll a 1");
    console.log("you rolled something else")
  }
  return this.diceRoll
} 




let dice1= Math.floor((Math.random() * 6) + 1);
let dice2= Math.floor((Math.random() * 6) + 1);
let sum = dice1 + dice2;




let btnRoll = document.querySelector('.btn-roll');
let btnHold = document.querySelector('.btn-hold');

