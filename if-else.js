const prompt = require("prompt-sync")();
let num = prompt("enter a number");
if (num % 3 == 0) {
    console.log(num, "is a multiple of 4")
}
    else
    {
        console.log(num, "is not a multiple of 3")
    }


    
