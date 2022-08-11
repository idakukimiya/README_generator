// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input

const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub Username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'what',
            message: 'What is your project and what problem will it solve?',
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you create this project?',
        },
        {
            type: 'input',
            name: 'how',
            message: 'How will someone use this?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide step-by-step installation instructions for your project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license will you use for your project?',
            choices: ['apache', 'Academic', 'MIT', 'Mozilla', 'Open', 'no license']
        },
        {
            type: 'confirm',
            name: 'confirmContributers',
            message: 'Would you like to allow other developers to contribute?',
        },
    ]
// TODO: Create a function to write README file
const writeFile = fileContent =>
    fs.writeFile('./generated-README.md', fileContent, err =>
        err ? console.log(err) : console.log('Successfully created README!')
    )
// TODO: Create a function to initialize app
// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README-guide.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();