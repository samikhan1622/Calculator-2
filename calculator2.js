import inquirer from 'inquirer';
let calclator = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "what is your name?",
    },
    {
        type: "input",
        name: "age",
        message: "what is your age?",
    },
    {
        type: "input",
        name: "gender",
        message: "what is your gender?",
    },
    {
        type: "input",
        name: "work",
        message: "what is your work?",
    },
    {
        type: "input",
        name: "city",
        message: "what is your city?",
    },
    {
        type: "input",
        name: "phone",
        message: "what is your phone number?",
    },
    {
        type: "confirm",
        name: "confirm",
        message: "are you sure?",
        default: true
    },
]);
console.log(calclator);
