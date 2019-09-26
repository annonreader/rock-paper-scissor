let UserScore=0;
let CompScore=0;
const userScore_span =document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > h1");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','s','p'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(userChoice)
{
     let computerChoice = getComputerChoice();
     console.log("i am logging userchoice "+userChoice);
     switch(userChoice+computerChoice)
     {
         case "rs":
         case "sp":
         case "pr":
             win(userChoice,computerChoice);
            // console.log("i am logging the user choice--> "+userChoice);
             break;
         case "rp":
         case "ps":
         case "sr":
            lose();
            break;
         case "rr":
         case "pp":
         case "ss":
            draw();
             break;
     }
}

function convertToWord(letter)
{
    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    return "Scissor";
}
function win(userChoice, computerChoice)
{
    UserScore++;
    userScore_span.innerHTML = UserScore;
    compScore_span.innerHTML = CompScore;
    result_p.innerHTML = convertToWord(userChoice)+ " beats " +convertToWord(computerChoice)+", You Win! ";
    console.log('win');
}
function lose(userChoice,computerChoice)
{
    CompScore++;
    userScore_span.innerHTML = UserScore;
    compScore_span.innerHTML = CompScore;
    result_p.innerHTML = convertToWord(userChoice)+ " beats " +convertToWord(computerChoice)+ ", You Lose! ";
    console.log('win');
    console.log('lose');
}
function draw(userChoice,computerChoice)
{
    console.log('draw');
    result_p.innerHTML = convertToWord(userChoice)+ " beats " +convertToWord(computerChoice)+ ", Draw! ";
}






function main(){
rock_div.addEventListener('click',function(){
    //console.log("hey you clicked on rock");
    game("r");
})
paper_div.addEventListener('click',function(){
  //  console.log("hey you clicked on paper");
    game("p");
})
scissor_div.addEventListener('click',function(){
   // console.log("hey you clicked on scissor");
    game("s");
})
}

main();
//console.log(getComputerChoice());