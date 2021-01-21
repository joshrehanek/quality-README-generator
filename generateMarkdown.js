// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let result;
    switch (license) {
       case 'MIT':
          result = ' - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
          break;
        case 'IBM':
            result = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
            break;
        case 'Mozilla':
            result = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break;
        case 'None':
            result = '';
            break;
   }
   return result;
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
    let result;
    switch (license) {
       case 'MIT':
          result = '[MIT](https://opensource.org/licenses/MIT)';
          break;
        case 'IBM':
            result = '[IBM](https://opensource.org/licenses/IPL-1.0)'
            break;
        case 'Mozilla':
            result = '[Mozilla](https://opensource.org/licenses/MPL-2.0)'
            break;
        case 'None':
            result = '';
            break;
   }
   return result;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const licenseSection = `${renderLicenseLink(license)} ${renderLicenseBadge(license)}`
    return licenseSection;
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, test, contributing, username, email, license}) {

return `

# ${title}

## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Contributing](#contributing)
- [About](#about)
- [License](#license)

## Description
${description} 
## Installation: 
${installation}
## Usage: 
${usage}
## Test:
${test}
## Contributing: 
${contributing}
## About:
${username}
${email}
## License:
${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
