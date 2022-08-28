const answer = Math.floor(Math.random() * 10 + 1);//This is to allow a user to input a random number but the number that will be inputed must between 1 to 10 to get the answer right but you can put any number you like but it must be 1 to 10 to get the answer 
let guesses = 0;

document.getElementById("submit").onclick = function(){

    let guess = document.getElementById("guess").value;//get value of the user guess number
    guesses+=1;//count the number of guesses the user inputed before the answer

    if(guess == answer){//if statement to check if the user get the answer
        alert(`${answer} is the number. It took you ${guesses} guesses`);
    }
    else if(guess < answer){
        alert("Not close");
    }
    else{
        alert("I dont think so");
    }
}