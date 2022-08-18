
    let loss = "you lose!"
    let win = "you win!"
    let tie = "you tied!" 
    let playerScore = 0;
    let computerScore = 0;


    

    const buttons = document.querySelectorAll('button');

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {

  // and for each one we add a 'click' listener
     button.addEventListener('click', getPlayerChoice)});
    

    function getComputerChoice(){
        let a = Math.floor(Math.random()*3);
        if (a == 0){
            return "rock";
        }
        else if (a == 1){
            return "paper";
        }
        else 
            return "scissors";
    }
    
    function getPlayerChoice(e){
        let playerSelection = (e.target.id);
        let computerSelection = getComputerChoice();
        let pChoice = document.querySelector("#pChoice");
        pChoice.textContent = playerSelection;
        playRound(playerSelection,computerSelection);
        let cChoice = document.querySelector("#cChoice");
        cChoice.textContent =computerSelection;
    } 
    //let playerSelection = prompt('Enter rock, paper, or scissors')

    function playRound(playerSelection, computerSelection){
        if (playerSelection == "rock" && computerSelection == "paper")
            determineWinner(loss);
        if (playerSelection == "paper" && computerSelection == "paper") 
            determineWinner(tie);
        if (playerSelection == "scissors" && computerSelection == "paper")
            determineWinner(win);
        if (playerSelection == "rock" && computerSelection == "rock")
            determineWinner(tie);
        if (playerSelection == "paper" && computerSelection == "rock") 
            determineWinner(win);
        if (playerSelection == "scissors" && computerSelection == "rock")
            determineWinner(loss);
        if (playerSelection == "rock" && computerSelection == "scissors")
            determineWinner(win);
        if (playerSelection == "paper" && computerSelection == "scissors") 
            determineWinner(loss);
        if (playerSelection == "scissors" && computerSelection == "scissors")
            determineWinner(tie);
    }

        function determineWinner(result){
            if (result == win){
                playerScore++;
                const h1 = document.querySelector('h1');
                h1.textContent = playerScore;
                checkScore;
            }
            if (result ==loss){
                computerScore++;
                const h2 = document.querySelector('h2');
                h2.textContent = computerScore;
                checkScore();
            }
        }

    
        function checkScore(){
           if (playerScore ==5 || computerScore ==5 )
            alert("Game over!");
        }
    

    
    
