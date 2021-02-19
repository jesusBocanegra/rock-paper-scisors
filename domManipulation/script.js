function computerPlay() {
			let comp = Math.floor(Math.random() * (+3 + 1 - +1)) + +1;
			if (comp == 1) {
				return "rock";
			}
			if (comp == 2) {
				return "paper";
			}
			else {
				return "scissors";
			}
		}
		
		let gamesL = 0;
		let gamesW = 0;
		
		function finalmessage() {
			if ((gamesL ==5 || gamesW ==5) && (gamesL>gamesW)) {
				alert ('you lost')
			}
			if ((gamesL ==5 || gamesW ==5) && (gamesL<gamesW)) {
				alert ('You won!')
			}
		}
		
		function youLost() {
            printResults.textContent = 'You lost';
            gamesL = gamesL + 1;
			printComputerScore.textContent = "Games won by the computer: " +
gamesL;
		}
		
		function youWon() {
			printResults.textContent = 'You won!';
			gamesW = gamesW + 1;
			printPlayerScore.textContent = 'Games won by you: ' + gamesW;		
		}
		
		function rockSelection(){
		while (gamesL <5 && gamesW <5){
			if (computerPlay() == "paper") {
                youLost();
                computerPlay();
			}
            else if (computerPlay() == "scissors") {
				youWon();
                computerPlay();
			}
            else {
				outcome = "It's a tie!";
				printResults.textContent = outcome;
				computerPlay();
            }
            break
            }
           finalmessage();
		}
		
		function paperSelection() {
		while (gamesL <5 && gamesW <5) {
			if (computerPlay() == "scissors") {
                youLost();
                computerPlay();
            }
            else if (computerPlay() == "rock") {
                youWon();
                computerPlay();
            }
            else {
                outcome = "It's a tie!";
                printResults.textContent = outcome;
                computerPlay();
            }
            break
			}
			finalmessage();
		}
		
		function scissorsSelection(){
		while (gamesL <5 && gamesW <5) {
			if (computerPlay() == "rock") {
                youLost();
                computerPlay();
            }
            else if (computerPlay() == "paper") {
				youWon();                
                computerPlay();
            }
            else {
                outcome = "It's a tie!";
                printResults.textContent = outcome;
                computerPlay();
            }
            break
			}
			finalmessage();
		}		
		
		let resultsContainer = document.querySelector('#results');
		
		let divRock = document.createElement('div');
		let buttonRock = document.createElement('button');
		let divPaper = document.createElement('div');
		let buttonPaper = document.createElement('button');
		let divScissors = document.createElement('div');
		let buttonScissors = document.createElement('button');
		buttonRock.textContent = 'I choose Rock';
		buttonPaper.textContent = 'I choose Paper';
		buttonScissors.textContent = 'I choose Scissors';
		
		let divResults = document.createElement('div');
		let printResults = document.createElement('p');
		let divPlayerScore = document.createElement('div');
		let printPlayerScore = document.createElement('p');
		let divComputerScore = document.createElement('div');
		let printComputerScore = document.createElement('p');
		
		resultsContainer.appendChild(divRock);
		resultsContainer.appendChild(divPaper);
		resultsContainer.appendChild(divScissors);
		divRock.appendChild(buttonRock);
		divPaper.appendChild(buttonPaper);
		divScissors.appendChild(buttonScissors);
		resultsContainer.appendChild(divResults);
		resultsContainer.appendChild(divPlayerScore);
		resultsContainer.appendChild(divComputerScore);
		
		buttonRock.addEventListener('click', rockSelection);
		buttonPaper.addEventListener('click', paperSelection);
		buttonScissors.addEventListener('click', scissorsSelection);
				
		divResults.appendChild(printResults)
		divPlayerScore.appendChild(printPlayerScore)
		divComputerScore.appendChild(printComputerScore)
