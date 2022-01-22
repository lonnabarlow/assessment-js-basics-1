
const readline = require("readline");

const reader = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

console, log("Welcome to the  password validation tool")

reader.question = ("What is your password?" , function(answer){
  if (answer.length >= 10){
    console.log("Welcome friend, password valid")
  } else {
      console.log("Whoops, try again")
}
  reader.close()
})
