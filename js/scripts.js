//Business Logic
function Player(name, runningTotal, active, diceRoll, turnCount) {
  this.name = name;
  this.runningTotal = 0;
  this.active = active;
  this.diceRoll = 0;
  this.turnCount = 0;
}
Player.prototype.Roll = function () {
  let randomRoll = Math.floor(Math.random() *7);//random between 0-6
  this.diceRoll = randomRoll;
  if (randomRoll === 1) {
    this.turnCount = 0;
    this.diceRoll = 1;
  }
}
