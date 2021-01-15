// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// We import the `fs` module to enable interaction with the file system
const fs = require('fs');

const path = require('path');

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
    choices: ['MIT', 'BCS', 'Microsoft', 'Amazon'],
},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    //write file using location, file name, data; defines function
    fs.writeFileSync(path.join(__dirname, fileName), data);
    
    // fs.writeFile('README.md', `# ${data.title} \n## Description: ${data.description} \n## Installation: ${data.installation}\n## Usage: ${data.usage}\## Contributing: ${data.contributing}`, (err) =>

    //     err ? console.error(err) : console.log('Commit logged!')
    // );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        console.log(res);
        writeToFile('README2.md', generateMarkdown({...res}));
    })
}

// Function call to initialize app
init();
