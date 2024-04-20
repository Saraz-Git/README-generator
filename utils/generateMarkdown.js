// Create a function that returns a license badge based on which license is passed in
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
    case "Creative Commons Zero v1.0": return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case "Eclipse Public License 1.0": return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case "Mozilla Public License 2.0": return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
  }
}

// Create a function that returns the license link
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
    case "Creative Commons Zero v1.0": return `(http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case "Eclipse Public License 1.0": return `(https://opensource.org/licenses/EPL-1.0)`;
      break;
    case "Mozilla Public License 2.0": return `(https://opensource.org/licenses/MPL-2.0)`;
      break;
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  } else {
    return `## License

Copyright(c).All rights reserved.
    
Licensed under the[${license}](${renderLicenseLink(license)}) license.`;
  }
}

function renderLicenseContent(license) {
  if (license === "No License") {
    return "";
  } else {
    return `- [License](#license)`
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Test](#tests)
- [Questions](#questions)
${renderLicenseContent(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Features

${data.feature}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

Github Profile [Link](https://github.com/${data.github}).

For all related questions please email <${data.email}>.

${renderLicenseSection(data.license)}
`;
}

module.exports = { generateMarkdown };
