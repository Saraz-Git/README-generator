// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License": return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "No License": return "";
      break;
    case "Apache 2.0 License": return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GNU GPL v3": return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "BSD 3-Clause License": return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "BSD 2-Clause License": return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case "Boost Software License 1.0": return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case "Eclipse Public License 1.0": return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License": return `(https://opensource.org/licenses/MIT)`;
      break;
    case "No License": return "";
      break;
    case "Apache 2.0 License": return `(https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GNU GPL v3": return `(https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "BSD 3-Clause License": return `(https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "BSD 2-Clause License": return `(https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case "Boost Software License 1.0": return `(https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case "Eclipse Public License 1.0": return `(https://opensource.org/licenses/EPL-1.0)`;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This application is covered under ${data.license}${renderLicenseLink(data.license)}.

## Features

If your project has a lot of features, list them here.

## Contributing

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

https://www.contributor-covenant.org/

## Tests

Then provide examples on how to run tests here.

## Questions

Contact this email <${data.email}> with additional questions

[Link ](https://github.com/${data.github}) to Github Profile
`;
}

module.exports = { generateMarkdown };
