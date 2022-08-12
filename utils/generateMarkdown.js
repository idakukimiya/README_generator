// Function to return a message if user doesn't want contributors
function renderContributingSection(confirmContributers, data) {
  if (!confirmContributers) {
    return `
  Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.
    `;
  } else {
    return `
  ${data}
    `;
  }
}

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
}

// Function that returns license in table of contents
// If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== 'no license') {
    return `
  * [License](#license)
    `;
  } else {
    return ' ';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
## Table-of-Contents

  -[Description](#description)

  -[Installation](#installation)

  -[Usage](#usage)

  ${renderLicenseTOC(data.license)}

  -[Contributing](#contributing)

  -[Questions](#questions)
  
## [Description](#table-of-contents)

  Provide short explaining the what, why, and how of your project.

    * What was the motivation?

    * What problem does it solve?

    * What did you learn?

  ${data.what}
  ${data.why}
  ${data.how}

## [Installation](#table-of-contents)

  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


  ${data.installation}

## [Usage](#table-of-contents)

  Provide instructions and examples for use.

  ![screenshot of project](./screenshot.png)

  ${data.usage}

  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}

## [Contributing](#table-of-contents)

  List your collaborators, with links to their GitHub profiles.
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}

## [Questions](#table-of-contents)
  Please contact me using the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;
}
module.exports = generateMarkdown;
