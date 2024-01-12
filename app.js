let userScore = 0;
let comScore = 0;

const choices  = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comrScorePara = document.querySelector("#com-score");
const genComchoice = () =>{
    const options = ["rock","paper","scissor"];
    const idx = Math.floor(Math.random() *3);
    return options[idx];

};
const drawGame = () =>{
    msg.innerText = "Game drwan";
    msg.style.backgroundColor = "rgb(48, 0, 68);"
}
const showWinner= (userWin, userChoice, comChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        comScore++;
        comrScorePara.innerText = comScore;
        msg.innerText = `Oops...You loose ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) =>{
    const comChoice = genComchoice();
    if(userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = comChoice ==="paper"? false:true;
        }else if(userChoice==="paper"){
            userWin = comChoice === "scissor"? false:true
        }else{
            userWin = comChoice==="rock" ?false :true
        }
        showWinner(userWin,userChoice,comChoice);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});

