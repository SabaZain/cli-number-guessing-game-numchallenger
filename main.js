#! /usr/bin/env node
// CLI Number Guessing Game
import inquirer from "inquirer";
console.log("Welcome to CodeWithSaba-CLI Number Guessing Game-NumChallenger");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 6):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guess a correct number");
}
else {
    console.log("Sorry, You guess a wrong number");
}
