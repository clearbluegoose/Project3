let img = document.getElementById('img');
let output = document.getElementById('output');

let checkbutton = document.getElementById('checkbutton');
let randnumber = parseInt((Math.random()*101));


let history = document.getElementById('history');

let restart = document.getElementById('restart');
let score = document.getElementById('truescore');
let usednum = [];


let highscore2 = document.getElementById('highscore').value;

//let highscore2 = document.getElementById('highscore1').value;
//let highscore = document.getElementById('highscore1').value;
//let truescore = document.getElementById('truescore').value;

let highscore = 0

let truescore = 10

thenumber.innerHTML = randnumber

checkbutton.addEventListener('click', playgame);


function playgame()

{
    let input = document.getElementById('userinput1').value;
    
    
    
    if (isNaN(input)){output.innerHTML = 'Enter a valid number.'} 
    else if (input < 1) {output.innerHTML = 'Enter a number greater than 1'} 
    else if (input > 100){output.innerHTML = 'Enter a number less than 100'} 
    else if (usednum.includes(input)){output.innerHTML = 'Already used this number'} 
    else {usednum.push(input);
        if (input == randnumber){
          
          output.innerHTML = `You win, the number was ${randnumber}.`
          
          truescore++
          
          img.src = "windog.webp"
          
          history.innerHTML += `${input}`
          
          checkbutton.style.display = "none"
          score.innerHTML = truescore
          restart.innerHTML = 'Again?'
          //if (highscore > truescore) {highscore.innerHTML = highscore}
          //else {truescore = highscore 
           // highscore.innerHTML = highscore}}


           // high score does not track!

         if (truescore < highscore) {
         highscore.innerHTML = highscore}
        
       // if (truescore < highscore) { highscore2.innerHTML = highscore
          
       // } else {highscore2.innerHTML = highscore
          
       // }
        
        }
        
        
        
        

         




         
         
         
         
         //else (truescore = highscore){thehighscore.innerHTML = highscore}
          
           
        
        
        else if (input < randnumber){
          truescore--
          
          output.innerHTML = "Guessed too low!"
          history.innerHTML += `${input} `
          
          score.innerHTML = truescore}
          
          if (input > randnumber){
          truescore--
          
          output.innerHTML = "Guessed too high!"
          history.innerHTML += `${input} `
          
          score.innerHTML = truescore}
          
          if (truescore === 0) {
          checkbutton.style.display = "none"
          output.innerHTML = `YOU LOSE! GAME OVER! The number was ${randnum}. BETTER LUCK NEXT TIME`
          
          img.src = "losedog.jpg"
          
          
          
          restart.innerHTML = 'Try Again'
        }
      }
    };


    restart.addEventListener('click', restartgame);
    
    
    function restartgame(){
      output.innerHTML = 'Enter a number in the text box below';
      img.src = "startdog.gif";
      restart.innerHTML = 'Restart';
      checkbutton.style.display = "";
      history.innerHTML = '';
      truescore = 10
      usednum = [];
      randnumber = parseInt((Math.random()*101));
      
      
    };