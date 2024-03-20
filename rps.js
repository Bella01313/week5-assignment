const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
        return userInput
    } else {
        console.log('Error, Please type: rock, paper, scissors');
    }  
}
 const getComputerChoice = (userChoice, ComputerChoice) => {
    const randomNumber = Math.floor(Math.random()* 3);
    switch(randomNumber){
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    };
}
    const determineWinner = (userChoice, ComputerChoice) =>{

    if (userChoice === 'bomb'){
        return 'You won! Bomb always win';
    }
    if (userChoice === ComputerChoice){
        return 'This game is tie';
    }
    if (userChoice === 'rock')
    if (ComputerChoice === 'paper'){
        return 'Sorry Computer won!';
    } else {
        return "Congratulations you won!"
    }
    if (userChoice === 'paper')
    if (ComputerChoice === 'scissors'){
        return 'Sorry Computer won!';
    } else {
        return "Congratulations you won!"
    }
    if (userChoice === 'scissors')
    if (ComputerChoice === 'rock'){
        return 'Sorry Computer won!';
    } else {
        return "Congratulations you won!"
    }
}
 const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const ComputerChoice = getComputerChoice ();
    console.log ('you threw: ' + ComputerChoice);
    console.log(determineWinner(userChoice, ComputerChoice));
 };
 playGame();