let playgame=confirm("Shall we play rock,paper or scissors?");
if(playgame){
    let playerchoice=prompt("Please Enter Rock, Paper or Scissor.");
    if(playerchoice){
        let playerone=playerchoice.trim().toLowerCase();
       if( playerone==="rock"||
        playerone==="paper"||
        playerone==="scissor"){
            let computerchoice=Math.floor(Math.random()*3+1);
            let computer=computerchoice===1?"rock" : 
                         computerchoice===2?"paper" :
                         "scissors";
                         
        let result=playerone === computer?"Tie game!":playerone==="rock" && computer==="paper"?`playerone :${playerone}\n computer:${computer}\n computer wins!....`:
        playerone==="paper" && computer ==="scissors"? `playerone :${playerone}\n computer:${computer}\n computer wins!....`:
        playerone==="scissor" && computer ==="rock"?`playerone :${playerone}\n computer:${computer}\n computer wins!....`:
        `playerone :${playerone}\n computer:${computer}\n playerone wins!....`;
        alert(result);
        let playagain=confirm("Play Again?");
        playagain?location.reload():alert("Ok,thanks for playing.");                
        }
        else{
            alert("you didn't enter rock,paper,or scissors");
        }

    }
    else{
        alert("I guess you changed your mind . may be next time . ");
    }
}
else{
    alert("ok,maybe next time.")
}