// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(res) {
return `
# ${res.title}

## Description
${res.description} 
## Installation: 
${res.installation}
## Usage: 
${res.usage}
## Test:
${res.test}
## Contributing: 
${res.contributing}
## About:
${res.username}
${res.email}
## License:
${res.license}
   
`;
}

module.exports = generateMarkdown;
