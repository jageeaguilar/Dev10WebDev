

function displayResults(startingBet, diceRolls, moneyMax, rollsMax) {	
	document.getElementById("tableStartingBet").textContent = startingBet;
	document.getElementById("tableDiceRolls").textContent = diceRolls;
	document.getElementById("tableMoneyMax").textContent = moneyMax;
	document.getElementById("tableRollsMax").textContent = rollsMax;
	document.getElementById("results").style.display = "block";

}

function displayErrorMsg() {
	document.getElementById("errorMsg").innerHTML = "Please enter a number greater than zero";
	document.getElementById("errorMsg").style.display = "block";
}

var bet = document.getElementById("bet");

document.addEventListener("input", function (event) {
	isValidBet = bet.checkValidity();

	if( !isValidBet ) {
		displayErrorMsg();
	}
}, true);

function getBet() {	
	var betValue = document.getElementById('bet').value;
	var startingBet = 0;
	
	if(betValue!="" && betValue > 0) {		
		startingBet = parseInt(betValue);
	}
	
	return startingBet;
}

function luckySeven() {
	startingBet=getBet();
	var gameMoney = startingBet;
	var moneyMax = startingBet;
	var rollsMax = 0;
	var diceRolls = 0;
	
	while (gameMoney > 0) {
		var rolls = rollDice() + rollDice();
		diceRolls++;

		if (rolls == 7) {
			gameMoney = gameMoney + 4;
			
			if (gameMoney > moneyMax) {
				rollsMax = diceRolls;
				moneyMax = gameMoney;
			}
		}
		else {
			gameMoney = gameMoney -1;
		}
	}
	
	displayResults(startingBet, diceRolls, moneyMax, rollsMax);
}
		

function rollDice() {	
	return Math.floor(Math.random()*6)+1;
	
}

