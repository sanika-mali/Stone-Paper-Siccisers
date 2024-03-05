let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const  userScorePara = document.querySelector("#user-score");
const  compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    // stone , paper , seccisers
    const options = ["stone" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const drawGame = () => {
    console.log("the game was draw.");
    msg.innerText = "The Game was Draw!";
    msg.style.backgroundColor = " #081b31";

};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!");
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    console.log("user choice is:" ,  userChoice);
    //Genarate a computr choice  ---> modular
    const compChoice = genCompChoice();
    console.log("computer choice is:" , compChoice);

    if(userChoice == compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice == "stone"){
            //paper , scissors
            userWin = compChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            //stone , scissors
            userWin = compChoice == "scissors" ? false : true;
        }
        else{
            //stone , paper
            userWin = compChoice == "stone" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});