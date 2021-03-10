var rl = require('readline');
var prompts = rl.createInterface(process.stdin, process.stdout);

const lettera = 'a'.charCodeAt() - 1;
const letterz = 'z'.charCodeAt();
const inputRegEx = new RegExp(`^[0-9]{1}[a-z]{1,}`);

prompts.question(`Arguments: `, function(input){
    //Validate Input
   var validationResult= validateInput(input);

   if(validationResult){
    let outputString = '';

    let words = splitString(input);

    words.forEach(value => {
        outputString += processInput(value) + " ";
    });

    //Display output
    console.log(`Output: ${outputString}`);
   }
   else{
       console.log("please enter valid input");
   }
    process.exit();
});

function validateInput(input){
    return input.match(inputRegEx);
}

function processInput(input){
    //Extract first number character
    var res = parseInt(input.charAt(0));

    let stringJoint = '';
    //Start from 1 character to end of string
    for (var i = 1; i < input.length; i++) {

        let characterCodeAt = input.charCodeAt(i) + res;

        //If value higher than z = 122
        if(characterCodeAt > letterz){
            characterCodeAt = characterCodeAt - letterz + lettera;
        }

        stringJoint = stringJoint + String.fromCharCode(characterCodeAt); 
      }
      return stringJoint;
}

function splitString(input){
    //Split words
    return input.split(" ");
}

