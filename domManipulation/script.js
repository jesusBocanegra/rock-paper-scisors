let resultsContainer = document.querySelector('#results');
		
let divRock = document.createElement('div');
let buttonRock = document.createElement('button');
let divPaper = document.createElement('div');
let buttonPaper = document.createElement('button');
let divScissors = document.createElement('div');
let buttonScissors = document.createElement('button');
buttonRock.id = "rock";
buttonRock.textContent = 'I choose Rock';
buttonPaper.id = "paper";
buttonPaper.textContent = 'I choose Paper';
buttonScissors.id = "scissors";
buttonScissors.textContent = 'I choose Scissors';

let divResults = document.createElement('div');
let printResults = document.createElement('p');
let divPlayerScore = document.createElement('div');
let printPlayerScore = document.createElement('p');
let divComputerScore = document.createElement('div');
let printComputerScore = document.createElement('p');

let computerGame = '';
let playerSelection = '';
let gamesL = 0;
let gamesW = 0;

function computerPlay() {
		let comp = Math.floor(Math.random() * (+3 + 1 - +1)) + +1;
		if (comp == 1) {
			return computerGame = "rock";
		}
		if (comp == 2) {
			return computerGame = "paper";
		}
		if (comp == 3) {
			return computerGame = "scissors";
		}
}

function finalmessage() {
	if ((gamesL ==5 || gamesW ==5) && (gamesL>gamesW)) {
		alert ('You lost, press F5 to play again')
	}
	if ((gamesL ==5 || gamesW ==5) && (gamesL<gamesW)) {
		alert ('You won!, press F5 to play again')
	}
}

function playRound(){
	while (gamesL<5 && gamesW<5) {
		computerPlay();
		if ((computerGame == "paper" && playerSelection == "scissors") || 
(computerGame == "rock" && playerSelection == "paper") || (computerGame == 
"scissors" && playerSelection == "rock")) {
		printResults.textContent = 'You won!, computer choose: ' + computerGame;
		gamesW = gamesW + 1;
		printPlayerScore.textContent = 'Games won by you: ' + gamesW;
		}
		else if ((computerGame == "scissors" && playerSelection == "paper") 
|| (computerGame == "rock" && playerSelection == "scissors") || 
(computerGame == "paper" && playerSelection == "rock")) {
		printResults.textContent = 'You lost, computer choose: '+ computerGame;
		gamesL = gamesL + 1;
		printComputerScore.textContent = "Games won by the computer: " + gamesL;
		}
		else {
		printResults.textContent = 'Tied game, computer also choose: '+ 
computerGame;
		}
	break;
	}
	finalmessage();
}

buttonRock.addEventListener('click', () => {
	playerSelection = buttonRock.id;
	playRound();
});

buttonPaper.addEventListener('click', () => {
	playerSelection = buttonPaper.id;
	playRound();
});

buttonScissors.addEventListener('click', () => {
	playerSelection = buttonScissors.id;
	playRound();
});

resultsContainer.appendChild(divRock);
resultsContainer.appendChild(divPaper);
resultsContainer.appendChild(divScissors);
divRock.appendChild(buttonRock);
divPaper.appendChild(buttonPaper);
divScissors.appendChild(buttonScissors);
resultsContainer.appendChild(divResults);
resultsContainer.appendChild(divPlayerScore);
resultsContainer.appendChild(divComputerScore);

divResults.appendChild(printResults)
divPlayerScore.appendChild(printPlayerScore)
divComputerScore.appendChild(printComputerScore)
