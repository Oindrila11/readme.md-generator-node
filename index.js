const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'project description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'installation instructions?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'contribution info?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'for questions(email)?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'for questions(github)?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC'],
        filter(val) {
            return val.toLowerCase();
        }
    }
]

