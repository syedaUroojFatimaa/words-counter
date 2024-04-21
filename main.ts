#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.underline.red("\n\t WELCOME TO CODE WITH UROOJ - WORDS COUNTER\n"));

  //  prompt user to enter a sentence

let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
 
//trimming the sentence and splitting it into words based on "space"

let words = answers.sentence.trim().split(" ");

//analysis of user input sentence

console.log(chalk.bold("- sentence words: "));
console.log(words);
console.log(chalk.bold(`\n - word counter: ${chalk.bold.redBright(words.length)}`));