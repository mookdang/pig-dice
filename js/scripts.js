//Business Logic for player
function Player(name, runningTotal, active, diceRoll, turnCount) {
  this.name = name;
  this.runningTotal = 0;
  this.active = active;
  this.diceRoll = 0;
  this.turnCount = 0;


Player.prototype.Roll = function () {
  let randomRoll = Math.floor(Math.random() * 6) + 1);//random between 0-6
  this.diceRoll = randomRoll;
  if (randomRoll === 1) {
    this.turnCount = 0;
    this.diceRoll = 1;
    console.log("Next Player");
    console.log(diceRoll);
  }else{
    console.log("Keep rolling");
    console.log(diceRoll);
  }
} 



let dice1=(Math.random() * 6) + 1);
let dice2=(Math.random() * 6) + 1);
let sum = dice1 + dice2;




let btnRoll = document.querySelector('.btn-roll');
let btnHold = document.querySelector('.btn-hold');
