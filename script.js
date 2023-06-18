//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber)
document.querySelector(".check").addEventListener("click",function(){
// code check
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

    console.log("Correct")
}else{
    console.log("Wrong")
}








})

document.querySelector(".again").addEventListener("click",function(){
// code again
})



