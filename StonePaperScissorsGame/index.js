const handOptions = {
    'paper': "images/Paper.png",
    'rock': "images/Rock.png",
    'scissors': "images/Scissors.png",
    
}

let SCORE = 0;

const pickUserHand = (hand) =>{
    // console.log(hand);
    //display the result
    let hands = document.querySelector(".hands");
    hands.style.display =  "none";
    
    let contest = document.querySelector(".contest");
    contest.style.display =  "flex";

    document.getElementById("userPickImage").src = handOptions[hand];

    pickcomphand(hand);
};

const pickcomphand = (hand) =>{
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random()* hands.length)];

    document.getElementById("ComputerPickImage").src = handOptions[cpHand];
    referee(hand,cpHand);
}

const referee = (userhand,cpHand) => {
    if (userhand == "paper" && cpHand == "scissors") {
      setDecision("YOU LOSE!");
    }
    if (userhand == "paper" && cpHand == "rock") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    if (userhand == "paper" && cpHand == "paper") {
      setDecision("It's a tie!");
    }
    if (userhand == "rock" && cpHand == "scissors") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    if (userhand == "rock" && cpHand == "paper") {
      setDecision("YOU LOSE!");
    }
    if (userhand == "rock" && cpHand == "rock") {
      setDecision("It's a tie!");
    }
    if (userhand == "scissors" && cpHand == "scissors") {
      setDecision("It's a tie!");
    }
    if (userhand == "scissors" && cpHand == "rock") {
      setDecision("YOU LOSE!");
    }
    if (userhand == "scissors" && cpHand == "paper") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
};


const setDecision = (decision) =>{
   document.querySelector(".decision h1").innerText = decision;
}

const setScore=(newScore)=>{
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
}

const restartGame = () =>{
    let hands = document.querySelector(".hands");
    hands.style.display =  "flex";
    
    let contest = document.querySelector(".contest");
    contest.style.display =  "none";

}
