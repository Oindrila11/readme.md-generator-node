const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (your_input) => {
            if(your_input){
                return true;
            }else{
                console.log('Enter a title to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'project a description of the project.',
        validate: (your_description) => {
            if(your_description){
                return true;
            }else{
                console.log('Enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'provide instructions on how to install your project?',
        validate: (your_installation) => {
            if(your_installation){
                return true;
            }else{
                console.log('Enter the steps of installation to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project',
        validate: (your_usage) => {
            if(your_usage){
                return true;
            }else{
                console.log('Enter the information on how to use the project');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'BSD'],
        validate: (your_license) => {
            if(your_license.length > 0){
                return true;
            }else{
                console.log('Select a licnese for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to this project?',
        validate: (your_contribution) => {
            if(your_contribution){
                return true;
            }else{
                console.log('Provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How does the user test this project?',
        validate: (your_input) => {
            if(your_input){
                return true;
            }else{
                console.log('Explain how to test this project.');
                return false;
            }
        }
        
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username(Required)',
        validate: (github_input) => {
            if(github_input){
                return true;
            }else{
                console.log('Pleas enter your github username!');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email for people to contact you',
        validate: (email_input) => {
            if(email_input){
                return true;
            }else{
                console.log('Please enter your email');
                return false;
            }
        } 
    },
];

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => {
        if(err){
            return console.log(err);
        }
        console.log("Success! You can now preview your README file");
    });
};

function init() {
    inquirer.prompt(questions)
    .then(function(userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

init();

