#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.overline.bgBlack.italic.bold(`10 QUESTIONS QUIZ MCQs TEST`));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.what is the correct way to chect if two values are not equal in TypeScript?",
        choices: ["a==b", "a===b", "a=b", "a!==b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.which of the following characters is commonly allowed in variable in TypeScript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.which operator is comonly used for string concatenation in TypeScript?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.In TypeScript which symbol is comonly used to terminate a statement?",
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.which method of Inquirer.js is used to start the prompt interface and receive input?",
        choices: ["start()", "prompt()", "init()", "run()"]
    },
    {
        name: "question_6",
        type: "list",
        message: "Q6.What are the three main 'simple types' in TypeScript?",
        choices: ["Array,Object,Boolean", "Number,String,Boolean", "Object,String,Number"]
    },
    {
        name: "question_7",
        type: "list",
        message: "Q7.What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        choices: ["Implicit", "Explicit"]
    },
    {
        name: "question_8",
        type: "list",
        message: "Q8.True or False: TypeScript can always correctly infer a variables type?",
        choices: ["True", "False", "Non of these"]
    },
    {
        name: "question_9",
        type: "list",
        message: "Q9.What is the inherited type for the variable example in `const example = ['Dylan']`?",
        choices: ["string", "unknown[]", "any[]", "string[]"]
    },
    {
        name: "question_10",
        type: "list",
        message: "Q10.Type Aliases are mostly used with ______?",
        choices: ["Booleans", "Strings ", "Numbers"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a!==b":
        console.log(chalk.green.bold("1.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("1.Incorrect"));
}
switch (quiz.question_2) {
    case "$":
        console.log(chalk.green.bold("2.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("2.Incorrect"));
}
switch (quiz.question_3) {
    case "+":
        console.log(chalk.green.bold("3.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("3.Incorrect"));
}
switch (quiz.question_4) {
    case ";":
        console.log(chalk.green.bold("4.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("4.Incorrect"));
}
switch (quiz.question_5) {
    case "prompt()":
        console.log(chalk.green.bold("5.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("5.Incorrect"));
}
switch (quiz.question_6) {
    case "Number,String,Boolean":
        console.log(chalk.green.bold("6.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("6.Incorrect"));
}
switch (quiz.question_7) {
    case "Explicit":
        console.log(chalk.green.bold("7.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("7.Incorrect"));
}
switch (quiz.question_8) {
    case "False":
        console.log(chalk.green.bold("8.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("8.Incorrect"));
}
switch (quiz.question_9) {
    case "string[]":
        console.log(chalk.green.bold("9.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("9.Incorrect"));
}
switch (quiz.question_10) {
    case "Numbers":
        console.log(chalk.green.bold("10.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("10.Incorrect"));
}
console.log(chalk.yellowBright.italic(`You Score:${score} Out OF 10`));
