var diceRolls = 0;
var maxMoney = userInput;
var rollsMax = 0;
var startingBet;
var gameMoney;
var dice1;
var dice2;

function luckySeven(startingBet) {
	if (startingBet > 0) {
		gameMoney = startingBet;
	}
	
	if (gameMoney > 0){
		

function rollDice {
	dice1 = (Math.floor(Math.random()*6)+1);
	dice2 = (Math.floor(Math.random()*6)+1);
}

function isSeven {
	if (dice1+dice2===7);
}

function winLose {
	if (isSeven){
		gameMoney = gameMoney + 4;
	}
	else {
		gameMoney--;
	}
}