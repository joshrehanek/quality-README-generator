// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// We import the `fs` module to enable interaction with the file system
const fs = require('fs');
// Import path module to enable working with file & directory paths
const path = require('path');
// connects index.js to generateMarkdown.js
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [{
    type: 'input',
    message: 'Username:',
    name: 'username',
},
{
    type: 'input',
    message: 'Email:',
    name: 'email',
},
{
    type: 'input',
    message: 'Project Title: ',
    name: 'title',
},
{
    type: 'input',
    message: 'Project description: ',
    name: 'description',
},

{
    type: 'input',
    message: 'Installation Instructions:',
    name: 'installation',
},
{
    type: 'input',
    message: 'Testing:',
    name: 'test',
},
{
    type: 'input',
    message: 'Usage Information:',
    name: 'usage',
},
{
    type: 'input',
    message: 'Contribution guidlines:',
    name: 'contributing',
},
{
    type: 'list',
    message: 'Licenses:',
    name: 'license',
    choices: ['MIT', 'CC0', 'IBM', 'Mozilla'],
},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    //write file using location, file name, data; defines function
    fs.writeFileSync(path.join(__dirname, fileName), data);
    
}

// TODO: Create a function to initialize app
function init() {
    // inquirer pompts questions from questions object
    inquirer.prompt(questions)
    //then takes the responses and...
    .then((res) => {
        // console log responses
        console.log(res);
        // sends all responses to writeToFile function using the spread operator; creates README2 as fileName
        writeToFile('README2.md', generateMarkdown({...res}));
    })
}

// Function call to initialize app
init();
