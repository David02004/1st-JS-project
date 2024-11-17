let userScore = 0;
let compScore = 0;
let NewdrawScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const computerScorePara = document.getElementById("Computer-Score")



let genCompChoice = () =>{
    const options = ["Rock","paper","Scissors"]
    let randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}

const showWinner = (userWin,userChoice,compchoice) =>{
    if(userWin){

        userScore++;
        userScorePara.innerText = userScore;
        // document.getElementById("user-score").innerText = userScore;
        console.log(userScore);
        msg.innerText = `You won, your choice ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        // console.log(compScore);
        computerScorePara.innerText = compScore;
        // document.getElementById("Computer-Score").innerText = compScore;
        msg.innerText = `You Lose, Computer choose ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

let drawGame = () =>{
    NewdrawScore++;
    document.getElementById("numberOfDraws").innerText = NewdrawScore;
    msg.innerText = "Game was a draw! play again."
    msg.style.backgroundColor = "#081b31"
}

let playGame = (userChoice) =>{
    console.log("User choice = ", userChoice)
    let compchoice = genCompChoice();
    console.log("Computer's choice = ", compchoice);

    if(userChoice === compchoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="Rock"){
            userWin = compchoice === "paper" ? false:true; 
        }
        else if(userChoice == "paper"){
            userWin = compchoice == "Scissors" ? false: true;
        }
        else{
            userWin = compchoice == "Rock"? false:true;
        }
        showWinner(userWin, userChoice,compchoice);
    }
}


choices.forEach((choice) => {
    console.log(choice)
        choice.addEventListener("click",()=>{
            let userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });

})
