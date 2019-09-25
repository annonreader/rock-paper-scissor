const UserScore=0;
const CompScore=0;
const userScore_span =document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
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
     const computerChoice = getComputerChoice();
     //console.log(getComputerChoice);
     switch(userChoice+computerChoice)
     {
         case 'rs':
         case 'sp':
         case 'pr':
             win();
             break;
         case 'rp':
         case 'ps':
         case 'sr':
            lose();
            break;
         case 'rr':
         case 'pp':
         case 'ss':
            draw();
             break;
     }
}

function win()
{
    console.log('win');
}
function lose()
{
    console.log('lose');
}
function draw()
{
    console.log('draw');
}






function main(){
rock_div.addEventListener('click',function(){
    //console.log("hey you clicked on rock");
    game('r');
})
paper_div.addEventListener('click',function(){
  //  console.log("hey you clicked on paper");
    game('p');
})
scissor_div.addEventListener('click',function(){
   // console.log("hey you clicked on scissor");
    game('s');
})
}

main();
//console.log(getComputerChoice());