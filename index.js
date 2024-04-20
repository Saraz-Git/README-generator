// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs/promises');
const { generateMarkdown } = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        default: "Project Title",
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
        default: "A short description explaining the what, why, and how of the project."
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: "Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use, including file path for screenshot?',
        default: "Provide instructions and examples for use."
    },
    {
        type: 'input',
        name: 'feature',
        message: 'Please list the features of this application?',
        default: "If your project has a lot of features, list them here."
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list any contributors?',
        default: "[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/) "
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide required tests if applicable?',
        default: "Provide examples on how to run tests here."
    },
    {
        type: "list",
        message: "Choose your license",
        name: "license",
        choices: ["No License", "Apache 2.0 License", "GNU GPL v3", "MIT License", "BSD 3-Clause License", "BSD 2-Clause License", "Boost Software License 1.0", "Creative Commons Zero v1.0", "Eclipse Public License 1.0", "Mozilla Public License 2.0"],
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address for contact?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
];

// Create a function to write README file
//function writeToFile(fileName, data) { }

//Create a function to initialize app
const init = async () => {
    try {
        const answer = await inquirer.prompt(questions);

        const markdownFile = generateMarkdown(answer);
        await fs.writeFile("result.md", markdownFile);
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
