//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score= 20
let highScore = 0
console.log(randomNumber)
document.querySelector(".check").addEventListener("click",function(){
// code check
// if score = 0
if (score=== 0) return
// 1. get user input 
const input = document.querySelector(".guess").value * 1
// 1.correct!
// 2.Wrong Guess 
if (input === randomNumber){
    //1. background changes to green 
    document.querySelector("body").style.backgroundColor="green"
    //2. message should be correct number
    document.querySelector(".message").innerText ="Correct Number"
    //3. ? should display random number
    document.querySelector(".number").innerText = randomNumber

    // check hightscore score> highscore change highscore
    if(score > highScore){
        // 1. highscore innerText score
        document.querySelector(".highscore").innerText= score
    }


}else{
    // 1. -1 from score

    score--  //0
      // 2. display the new score
      document.querySelector(".score").innerText = score
if (score === 0){
      // 1. Background changes to red
    document.querySelector("body").style.backgroundColor = "red"
    // 2. message should be 'Game Over'
    document.querySelector(".message").innerText ="Game Over!"
    return
}
  
    // 3. if input  > randomNumber "Too High"
     // 4. if input  < randomNumber "Too Low"
    if(input > randomNumber){
        document.querySelector(".message") ="Too High"
    }else{
        document.querySelector(".message") ="Too Low"
    }
   
}

});
// code again
document.querySelector(".again").addEventListener("click",function(){
randomNumber = Math.trunc(Math.random() * 20) + 1; // 1 - 20
document.querySelector("body").style.backgroundColor = "black";
document.querySelector(".number").innerText = "?";
document.querySelector(".message").innerText = "Start Guessing ....";
score = 20;
document.querySelector(".score").innerText = score;
document.querySelector(".guess").value = "";

});



