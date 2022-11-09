  const letsPlay = confirm("Would you like to guess a random number?")
   
  if(letsPlay === true) {
    alert("Great, press ok to continue.");
  } else {
    alert("Too bad, we are going to play anyways.")
  }
  
  const history = {};

function play(){

  const userName = prompt("Who will be attempting to guess the random number?" , "Enter first name.");
  history[userName] = 0;
  var numAttempts = 0;
  var playAgain = true;
  var secretNumber = Math.floor(Math.random()*10+1);

  while(playAgain){

    const guess = prompt("Guess a number between 1 and 10.");

    if(guess === null){
      alert(`Goodbye ${userName}.`);
      break;
    }

    const numGuess = Number(guess);

    if(Number.isNaN(numGuess)){
      alert(`Sorry ${userName}, please enter a valid number.`);
      numAttempts ++;
    } else if(numGuess > secretNumber){
      alert(`Sorry ${userName}, please guess lower.`);
      numAttempts ++;
    } else {    //(numGuess < secretNumber){
      alert(`Sorry ${userName}, please guess higher.`);
      numAttempts ++;
    // } else {
    //   alert(`That's correct ${userName}, it took you ${numAttempts} guesses.`)
    } 
    const prevAttempts = history[userName];
    const difference = Math.abs(numAttempts - prevAttempts);
    if(history[userName] === undefined){
      alert(`Correct ${userName}, it took you ${numAttempts}!`);
    } else if(difference < 0){
      alert(`That's correct ${userName}, you beat your previous attempt by ${difference} fewer guesses!`);
    } else if(difference > 0){
      alert(`That's correct ${userName}, you did better in your last attempt by ${difference} guesses.`);
    } else {
      alert(`That's correct ${userName}, you tied your previous attempt's guesses.`)
    }
    history[username] = numAttempts;
    //break;
  }
  var finalQuestion = confirm("Would you like to play again?");
  if(finalQuestion === false){
      playAgain = false;
  } else {
      play();  

  }
}
play();
//add a variable that records the value of the guess
