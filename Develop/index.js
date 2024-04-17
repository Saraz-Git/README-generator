// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs/promises');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
        message: 'Filepath of the usage screenshot?',
        default: "Provide instructions and examples for use."
    },
    {
        type: "list",
        message: "Choose your license",
        name: "license",
        choices: ["No License", "Apache 2.0 License", "GNU GPL v3", "MIT License", "BSD 3-Clause License", "BSD 2-Clause License", "Boost Software License 1.0", "Eclipse Public License 1.0"],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
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
