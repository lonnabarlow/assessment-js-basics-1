
const readline = require("readline")
    console, log(" Welcome to the  password validator tool")


const reader = createPassword({
  input: process.stdin,
  output: process.stdout,
});

const question = ["Enter Password"]
for (let i = 0; question.length; i++){
    if(question[i] === 9){
        console.log("Welcome friend")
    }else{
        console.log("Whoops, try again")
    }
}
