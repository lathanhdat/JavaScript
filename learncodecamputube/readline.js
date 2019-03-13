const readline = require('readline');
const readlinInterface = readline.createInterface({input:process.stdin,output:process.stdout});

let num1 = Math.floor((Math.random() *10) +1); //Random number from 1 to 10
let num2 = Math.floor((Math.random() *10) +1);
let answer = num1 + num2;

readlinInterface.question(`What is ${num1} + ${num2} ?\n`,(userInput)=>{
    if(userInput.toString() === answer.toString())
    {
        readlinInterface.close();
    }
    else
    {
        readlinInterface.setPrompt('Try again \n');
        readlinInterface.prompt();
        readlinInterface.on('line',(userInput)=>{
            if(userInput.trim() == answer)
            {
                readlinInterface.close();
            }
            else
            {
                readlinInterface.setPrompt(`You enter ${userInput} which is not correct \n`);
                readlinInterface.prompt();
            }
        })
    }
});
readlinInterface.on('close',()=>{
    console.log('Finished');
})