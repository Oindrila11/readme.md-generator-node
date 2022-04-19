 const licenseBadgeLinks = require("./licenseBadges.js");
 generateMarkdown = (data) => {
 data.licenseBadge = licenseBadgeLinks[data.license];

 return `# ${data.title}

 ${data.licenseBadge}
 

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Testing](#Testing)
- [License](#License)


## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## Contribution:
${data.contribution}
## Testing:
${data.test}

## License:
This project is covered under the ${data.license} License.

## Contact information:
- Github: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:user@example.com) `;

};
module.exports = generateMarkdown;